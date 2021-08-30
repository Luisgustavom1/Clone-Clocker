import { useState } from "react";
import { createContext, ReactNode } from "react";

import { ThemeTypes } from "../types";
import { dark, light } from "../styles/theme";
import formatDate from "../Utils/FormatDate";
import firebase from "firebase";

interface AppContextProps {
  theme: ThemeTypes
  setTheme: (theme: ThemeTypes) => void,
  isAuthenticated: boolean,
  dateFormated: string[],
  setDateFormated: (value: string[]) => void,
  login: (email: string, password: string) => Promise<any>,
  user: any,
  setUser: (value: any) => void,
}

const AppContext = createContext<AppContextProps>({
  user: {},
  setUser: () => {},
  theme: dark,
  setTheme: () => {},
  isAuthenticated: true,
  dateFormated: [],
  setDateFormated: () => {},
  login: () => new Promise(() => {}),
})

interface AppProviderProps {
    children: ReactNode
}

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  const date = new Date();

  const [dateFormated, setDateFormated] = useState<string[]>(formatDate(date));
  const [user, setUser] = useState<any>()
  const [theme, setTheme] = useState<ThemeTypes>(dark)

  async function login(email: string, password: string) {
    return await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential.user
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage + ' ' + errorCode);
    });
  };

  return (
      <AppContext.Provider value={{ 
        theme, 
        setTheme, 
        isAuthenticated: !!user, 
        dateFormated, 
        setDateFormated, 
        login, 
        user, 
        setUser
      }}>
          {children}
      </AppContext.Provider>
  );
}

export default AppContext