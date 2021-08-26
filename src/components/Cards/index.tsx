import { CardsStyles } from './styles';

interface CardsProps {
    hour: string
    occupied: boolean
}

const Cards= (props: CardsProps): JSX.Element => {
  return(
      <CardsStyles occupied={props.occupied}>
        {props.hour}
      </CardsStyles>
  )
}

export default Cards;