import { DefaultTheme } from "styled-components"

export const light: DefaultTheme = {
    title: 'light',
    colors: {
        primary: '#2B3C54',
        secondary: '#B1C5E2',
        occupied: '#2B3C544A'
    },
    background: {
        notOccupied: '#4E84D4',
        occupied: '#EDF2F799',
        main: '#FFFFFF'
    },
    same: {
        border: {
            primary: '#4E84D4'
        },
        colors: {
            finallyPage: '#4E84D4'
        },
        background: {
            initialPage: '#4E84D4',
        }
    }
}

export const dark: DefaultTheme = {
    title: 'dark',
    colors: {
        primary: '#B1C5E2',
        secondary: '#2B3C54',
        occupied: '#9EA8B64A'
    },
    background: {
        notOccupied: '#B1C5E2',
        occupied: '#2B333A99',
        main: '#2B3C54'
    },
    same: {
        border: {
            primary: '#4E84D4'
        },
        colors: {
            finallyPage: '#4E84D4'
        },
        background: {
            initialPage: '#4E84D4',
        }
    }
}