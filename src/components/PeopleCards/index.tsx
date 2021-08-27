import { PeopleCardsStyle, PeopleCardsNotOcuppiedStyle, PeopleCardsOcuppiedStyle } from "./styles";

interface PeopleCardsProps {
    occupied: boolean
    hour: string
    data?: {
        name: string
        number: string
    }
}

const PeopleCards = (props: PeopleCardsProps): JSX.Element => {
  return(
      <PeopleCardsStyle occupied={props.occupied}>
          {props.occupied ? 
            <PeopleCardsOcuppiedStyle occupied={props.occupied}>
                <p>{props.hour}</p>
                {props.data && 
                    <aside>
                        <h2>{props.data.name}</h2>
                        <p>{props.data.number}</p>
                    </aside>
                }
            </PeopleCardsOcuppiedStyle> : 

            <PeopleCardsNotOcuppiedStyle occupied={props.occupied}>
                <p>{props.hour}</p><p>- LIVRE</p>
            </PeopleCardsNotOcuppiedStyle>
            }
      </PeopleCardsStyle>
  )
}

export default PeopleCards;