import styled from 'styled-components';

interface PeopleCardsProps {
    occupied: boolean
}

export const PeopleCardsStyle = styled.section<PeopleCardsProps>`
    width: 100%;
    height: 103px;

    border-radius: 6px;

    font-size: 16px;
    letter-spacing: .2rem;

    background-color: ${props => props.occupied ? props.theme.background.occupied : 'transparent'};

    p {
        color: ${props => props.theme.same.colors.finallyPage}
    }
`;

export const PeopleCardsOcuppiedStyle = styled(PeopleCardsStyle)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 25px;

    font-size: 16px;

    aside {
        text-align: right;
        p {
            color: ${props => props.theme.title === 'dark' ? '#B1C5E2' : '#2B3C54'};
        }
    }
`

export const PeopleCardsNotOcuppiedStyle = styled(PeopleCardsStyle)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    
    padding: 0 25px;
    
    font-size: 16px;

    border: 1px solid #4E84D4
`