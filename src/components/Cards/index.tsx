import { CardsStyles } from './styles';

interface CardsProps {
  children: React.ReactNode
  occupied: boolean
  day: string
  onClick: () => void
}

const Cards= ({ children, occupied, day, onClick }: CardsProps): JSX.Element => {
  return(
      <CardsStyles occupied={occupied} data-day={day} onClick={onClick}>
        {children}
      </CardsStyles>
  )
}

export default Cards;