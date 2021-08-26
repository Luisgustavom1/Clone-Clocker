import PeopleCards from '../../components/PeopleCards';
import { Container } from './styles';

const HoursPeoples = (): JSX.Element => {
  return(
      <Container>
        <PeopleCards
            occupied={true}
            hour='12:00'
            data={{
                name: 'luis', 
                number: '(99)9 9999-9999'
            }}
        />
        <PeopleCards
            occupied={false}
            hour='08:00'
        />
      </Container>
  );
}

export default HoursPeoples;