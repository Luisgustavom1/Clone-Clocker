import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            occupied: string;
        };
        background: {
            notOccupied: string;
            occupied: string;
            main: string;
        };
        same: {
            border: {
                primary: string
            },
            colors: {
                finallyPage: string
            },
            background: {
                initialPage: '#4E84D4',
            }
        }
    }
};