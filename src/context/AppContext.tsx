import { useState } from "react";
import { createContext, ReactNode } from "react";

import { ThemeTypes } from "../types";
import { dark, light } from "../styles/theme";
import formatDate from "../Utils/FormatDate";

interface AppContextProps {
  theme: ThemeTypes
  setTheme: (theme: ThemeTypes) => void,
  isAuthenticated: boolean,
  dateFormated: string[],
  setDateFormated: (value: string[]) => void
}

const AppContext = createContext<AppContextProps>({
  theme: dark,
  setTheme: () => {},
  isAuthenticated: true,
  dateFormated: [],
  setDateFormated: () => {}
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider(props: AppProviderProps) {
    const { children } = props;
    
    const date = new Date();

    const [dateFormated, setDateFormated] = useState<string[]>(formatDate(date));
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [theme, setTheme] = useState<ThemeTypes>(dark)

    return (
        <AppContext.Provider value={{ theme, setTheme, isAuthenticated, dateFormated, setDateFormated }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext