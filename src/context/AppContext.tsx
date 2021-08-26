import { useState } from "react";
import { createContext, ReactNode } from "react";

import { ThemeTypes } from "../types";
import { dark, light } from "../styles/theme";

interface AppContextProps {
    theme: ThemeTypes
    setTheme: (theme: ThemeTypes) => void
}

const AppContext = createContext<AppContextProps>({
    theme: light,
    setTheme: () => {}
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider(props: AppProviderProps) {
    const { children } = props;

    const [theme, setTheme] = useState<ThemeTypes>(light)

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext