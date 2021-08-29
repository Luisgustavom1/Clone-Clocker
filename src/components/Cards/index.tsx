import { CardsStyles } from './styles';

interface CardsProps {
  children: React.ReactNode
  occupied: boolean
  onClick: () => void
}

const Cards= ({ children, occupied, onClick }: CardsProps): JSX.Element => {
  return(
      <>
        <CardsStyles occupied={occupied} onClick={onClick}>
          {children}
        </CardsStyles>
      </>
  )
}

export default Cards;