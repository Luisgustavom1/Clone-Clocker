import { CardsStyles } from './styles';

interface CardsProps {
    children: React.ReactNode
    occupied: boolean
}

const Cards= ({ children, occupied }: CardsProps): JSX.Element => {
  return(
      <CardsStyles occupied={occupied}>
        {children}
      </CardsStyles>
  )
}

export default Cards;