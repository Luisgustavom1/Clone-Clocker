import { FormEvent, useContext } from 'react';
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
  const [hourChecked, setHourChecked] = useState<string>('')

  const { dataToday } = useDataDay(dateFormated[2]);

  function handleClick(e: FormEvent<HTMLButtonElement> | any, occupied: boolean) {
    if(occupied) return history.push('/hours/details')

    setHourChecked(e.target.dataset.time);
    
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
                              onclick={(ev) => handleClick(ev, dataToday?.hours[key].occupied)}
                              time={dataToday?.hours[key].time}
                            >
                                {dataToday?.hours[key].time}
                            </Cards>
                          </>
                })
              }
              {showModal && 
                          <Modal 
                            setShowModal={setShowModal} 
                            day={dataToday?.day} 
                            hour={hourChecked && hourChecked}
                            />}
          </div>
      </HourPageStyle>
  );
}

export default HoursPage;