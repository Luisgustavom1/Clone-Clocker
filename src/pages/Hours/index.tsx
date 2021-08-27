import { useContext } from 'react';
import { useState } from 'react';

import Cards from '../../components/Cards';
import AppContext from '../../context/AppContext';
import formatDate from '../../Utils/FormatDate';
import { HourPageStyle } from './styles';

const HoursPage = () => {
    
    const date = new Date();

    const [dateFormated, setDateFormated] = useState<string[]>(formatDate(date));

    const { datasHours } = useContext(AppContext);

    const dataToday =  datasHours.filter(dataHours => dataHours.day === dateFormated[2])[0].hours;
    
    function changeDay(change: 'increment' | 'decrement') {
        const dayUpdated: string[] = [];
        
        const newDay = change === 'increment' ? 
            (Number(dateFormated[2]) + 1) : 
            (Number(dateFormated[2]) - 1);

        for(var c = 0; c < dateFormated.length; c++) {
            if (c === 2) {
                dayUpdated.push(newDay.toString()) 
            } else {
                dayUpdated.push(dateFormated[c]) 
            }
        }

        setDateFormated(dayUpdated)      
    };

    return(
        <HourPageStyle>
            <span>
                <i className="fas fa-chevron-left" onClick={() => changeDay('decrement')}></i>
                <p> 
                    {dateFormated[0]}, {dateFormated[2]} de {dateFormated[1]}
                </p>
                <i className="fas fa-chevron-right" onClick={() => changeDay('increment')}></i>
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