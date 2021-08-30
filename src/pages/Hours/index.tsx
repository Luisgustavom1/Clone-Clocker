import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Cards from '../../components/Cards';
import Modal from '../../components/Modal';
import AppContext from '../../context/AppContext';
import { useDataDay } from '../../Hooks';
import changeDay from '../../Utils/changeDay';
import { HourPageStyle } from './styles';

const HoursPage = () => {
  const history = useHistory()

  const { dateFormated, setDateFormated } = useContext(AppContext);

  const [showModal, setShowModal] = useState<boolean>(false);

  const { dataToday } = useDataDay(dateFormated[2]);

  function handleClick(occupied: boolean) {
    if(occupied) return history.push('/hours/details')

    setShowModal(true)
  }

  return(
      <HourPageStyle>
          <span>
              <i className="fas fa-chevron-left" onClick={() => setDateFormated(changeDay('decrement', dateFormated))}></i>
              <p> 
                  {dateFormated[0]}, {dateFormated[2]} de {dateFormated[1]}
              </p>
              <i className="fas fa-chevron-right" onClick={() => setDateFormated(changeDay('increment', dateFormated))}></i>
          </span>
          <div>
              {
                dataToday && Object.keys(dataToday?.hours).map(key => {
                  return <>
                            <Cards 
                              occupied={dataToday?.hours[key].occupied}
                              onClick={() => handleClick(dataToday?.hours[key].occupied)}
                            >
                                {dataToday?.hours[key].time}
                            </Cards>
                            {showModal && <Modal setShowModal={setShowModal} day={dataToday.day} hour={dataToday?.hours[key].time}/>}
                          </>
                })
              }
          </div>
      </HourPageStyle>
  );
}

export default HoursPage;