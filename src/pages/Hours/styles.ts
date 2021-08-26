import styled from "styled-components";

export const HourPageStyle = styled.main`
    margin: 80px auto 0 auto;

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 60%;

        font-size: 16px;
        
        margin: 0 auto;
    }
    div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
        gap: 35px;

        margin-top: 60px;
    }
`
