import styled from 'styled-components';

interface CardsStylesProps {    
    occupied: boolean
}

export const CardsStyles = styled.button<CardsStylesProps>`
    background-color: ${props => props.occupied ? props.theme.background.occupied : props.theme.background.notOccupied};
    color: ${props =>  props.occupied ? props.theme.colors.occupied : props.theme.colors.secondary};

    padding: 21px 0;

    border-radius: 6px;

    font-size: 25px;
    letter-spacing: .2rem;

    width: 100%;
`;
