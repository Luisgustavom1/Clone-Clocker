import { useContext, useState } from 'react';
import PeopleCards from '../../components/PeopleCards';
import AppContext from '../../context/AppContext';
import { Container } from './styles';
import formatDate from '../../Utils/FormatDate';

const HoursDetails = (): JSX.Element => {

  const date = new Date()

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
      <Container>
        <i className="fas fa-chevron-left" onClick={() => changeDay('decrement')}></i>
          <p> 
              {dateFormated[0]}, {dateFormated[2]} de {dateFormated[1]}
          </p>
        <i className="fas fa-chevron-right" onClick={() => changeDay('increment')}></i>
        {dataToday.map(datas => 
          <PeopleCards 
            occupied={datas.occupied}
            hour={datas.time}
            data={{
              name: datas.details.name,
              number: datas.details.tel
            }}
          />)}
      </Container>
  );
};

export default HoursDetails;