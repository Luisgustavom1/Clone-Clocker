import { useContext } from 'react';
import { useState } from 'react';

import Cards from '../../components/Cards';
import Modal from '../../components/Modal';
import AppContext from '../../context/AppContext';
import changeDay from '../../Utils/changeDay';
import formatDate from '../../Utils/FormatDate';
import { HourPageStyle } from './styles';

const HoursPage = () => {
    
    const date = new Date();

    const [dateFormated, setDateFormated] = useState<string[]>(formatDate(date));
    const [showModal, setShowModal] = useState<boolean>(false)

    const { datasHours } = useContext(AppContext);

    const dataToday =  datasHours.filter(dataHours => dataHours.day === dateFormated[2])[0];

    return(
        <HourPageStyle>
            <span>
                <i className="fas fa-chevron-left" onClick={() => setDateFormated(changeDay('decrement', dateFormated))}></i>
                <p> 
                    {dateFormated[0]}, {dateFormated[2]} de {dateFormated[1]}
                </p>
                <i className="fas fa-chevron-right" onClick={() => setDateFormated(changeDay('decrement', dateFormated))}></i>
            </span>
            <div>
                {dataToday.hours.map(today => 
                    <>
                      <Cards 
                        occupied={today.occupied}
                        onClick={() => setShowModal(true)}
                      >
                          {today.time}
                      </Cards>
                      {showModal && <Modal setShowModal={setShowModal} day={dataToday.day} hour={today.time}/>}
                    </>
                    )
                    }
            </div>
        </HourPageStyle>
    );
}

export default HoursPage;