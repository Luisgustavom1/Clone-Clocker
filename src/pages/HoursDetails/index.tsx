import { useContext } from 'react';
import PeopleCards from '../../components/PeopleCards';
import AppContext from '../../context/AppContext';
import { Container } from './styles';
import changeDay from '../../Utils/changeDay';
import { useDataDay } from '../../Hooks';

const HoursDetails = (): JSX.Element => {
  const { dateFormated, setDateFormated } = useContext(AppContext);

  const { dataToday } = useDataDay(dateFormated[2]);

  return(
      <Container>
        <span>
          <i className="fas fa-chevron-left" onClick={() => setDateFormated(changeDay('decrement', dateFormated))}></i>
            <p> 
                {dateFormated[0]}, {dateFormated[2]} de {dateFormated[1]}
            </p>
          <i className="fas fa-chevron-right" onClick={() => setDateFormated(changeDay('increment', dateFormated))}></i>
        </span>
        {dataToday && Object.keys(dataToday?.hours).map(key => 
          <PeopleCards 
            occupied={dataToday?.hours[key].occupied}
            hour={dataToday?.hours[key].time}
            data={{
              name: dataToday?.hours[key].details.name,
              number: dataToday?.hours[key].details.tel,
            }}
          />)}
      </Container>
  );
};

export default HoursDetails;