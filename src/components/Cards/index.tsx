import { FormEvent } from 'react';
import { CardsStyles } from './styles';

interface CardsProps {
  children: React.ReactNode
  occupied: boolean
  onclick: (ev: FormEvent) => void
  time: string
}

const Cards= ({ children, occupied, onclick, time }: CardsProps): JSX.Element => {
  return(
      <>
        <CardsStyles 
          occupied={occupied} 
          onClick={(ev) => onclick(ev)} 
          data-time={time}  
        >
          {children}
        </CardsStyles>
      </>
  )
}

export default Cards;