import { useContext } from 'react';
import { useState } from 'react';

import Cards from '../../components/Cards';
import AppContext from '../../context/AppContext';
import changeDay from '../../Utils/changeDay';
import formatDate from '../../Utils/FormatDate';
import { HourPageStyle } from './styles';

const HoursPage = () => {
    
    const date = new Date();

    const [dateFormated, setDateFormated] = useState<string[]>(formatDate(date));

    const { datasHours } = useContext(AppContext);

    const dataToday =  datasHours.filter(dataHours => dataHours.day === dateFormated[2])[0].hours;

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
                {dataToday.map(today => 
                    <Cards 
                        occupied={today.occupied}
                    >
                        {today.time}
                    </Cards>)}
            </div>
        </HourPageStyle>
    );
}

export default HoursPage;