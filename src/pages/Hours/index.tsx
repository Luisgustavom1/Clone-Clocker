import { useContext } from 'react';
import { useState } from 'react';

import Cards from '../../components/Cards';
import Modal from '../../components/Modal';
import AppContext from '../../context/AppContext';
import { useDataDay } from '../../Hooks';
import changeDay from '../../Utils/changeDay';
import { HourPageStyle } from './styles';

const HoursPage = () => {
  const { dateFormated, setDateFormated } = useContext(AppContext);

  const [showModal, setShowModal] = useState<boolean>(false);

  const { dataToday } = useDataDay(dateFormated[2]);

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
                              onClick={() => setShowModal(true)}
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