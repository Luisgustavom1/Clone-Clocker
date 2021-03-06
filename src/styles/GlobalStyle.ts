import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.background.main};
    }

    a, li, ul, ol {
        text-decoration: none;
    }

    button, input, textarea {
        border: none;
    }
`

export const ContainerContent = styled.div`
    height: 100%;
    width: 42vw;
    min-width: 320px;

    margin: 0 auto;

    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    letter-spacing: 0.2em;
`