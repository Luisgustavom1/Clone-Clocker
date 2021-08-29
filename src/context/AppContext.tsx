import { useState } from "react";
import { createContext, ReactNode } from "react";

import { DatasHoursType, ThemeTypes } from "../types";
import { dark, light } from "../styles/theme";

const initialData = [
    {
        day: '27',
        hours: [
            {
                occupied: true,
                time: '08:00',
                details: {
                    name: 'luis',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: true,
                time: '09:00',
                details: {
                    name: 'luis',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: false,
                time: '10:00',
                details: {
                    name: 'maria',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: true,
                time: '11:00',
                details: {
                    name: 'henrique',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: false,
                time: '12:00',
                details: {
                    name: 'luisa',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: true,
                time: '13:00',
                details: {
                    name: 'lucas',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: false,
                time: '14:00',
                details: {
                    name: 'pedro',
                    tel: '(99)9 9999-9999'
                }
            },
            {
                occupied: true,
                time: '15:00',
                details: {
                    name: 'mateus',
                    tel: '(99)9 9999-9999'
                }
            },
        ]
    },
    {
        day: '28',
        hours: [
            {
                occupied: false,
                time: '08:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '09:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '10:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '11:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '12:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '13:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '14:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '15:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
        ]
    },
    {
        day: '29',
        hours: [
            {
                occupied: false,
                time: '08:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '09:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '10:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '11:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '12:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '13:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '14:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
            {
                occupied: false,
                time: '15:00',
                details: {
                    name: '',
                    tel: ''
                }
            },
        ]
    },
];

interface AppContextProps {
    theme: ThemeTypes
    setTheme: (theme: ThemeTypes) => void,
    isAuthenticated: boolean,
    datasHours: DatasHoursType[],
    setDatasHours: (datas: DatasHoursType[]) => void
}

const AppContext = createContext<AppContextProps>({
    theme: dark,
    setTheme: () => {},
    isAuthenticated: true,
    datasHours: [],
    setDatasHours: () => {}
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider(props: AppProviderProps) {
    const { children } = props;
    
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [datasHours, setDatasHours] = useState(initialData);
    const [theme, setTheme] = useState<ThemeTypes>(dark)

    return (
        <AppContext.Provider value={{ theme, setTheme, isAuthenticated, datasHours, setDatasHours }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext