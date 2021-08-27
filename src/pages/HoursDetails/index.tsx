import { useContext, useState } from 'react';
import PeopleCards from '../../components/PeopleCards';
import AppContext from '../../context/AppContext';
import { Container } from './styles';
import formatDate from '../../Utils/FormatDate';
import changeDay from '../../Utils/changeDay';

const HoursDetails = (): JSX.Element => {

  const date = new Date()

  const [dateFormated, setDateFormated] = useState<string[]>(formatDate(date));

  const { datasHours } = useContext(AppContext);

  const dataToday =  datasHours.filter(dataHours => dataHours.day === dateFormated[2])[0].hours;
  
  return(
      <Container>
        <span>
          <i className="fas fa-chevron-left" onClick={() => setDateFormated(changeDay('decrement', dateFormated))}></i>
            <p> 
                {dateFormated[0]}, {dateFormated[2]} de {dateFormated[1]}
            </p>
          <i className="fas fa-chevron-right" onClick={() => setDateFormated(changeDay('increment', dateFormated))}></i>
        </span>
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