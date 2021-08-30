import { useContext } from "react";
import { ThemeProvider } from 'styled-components';

import AppContext, { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import { ContainerContent, GlobalStyle } from "./styles/GlobalStyle";
import Routes from "./Routes";

function App() {
  const { theme } = useContext(AppContext)
  
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <ContainerContent>
            <Header />
            <Routes />
          </ContainerContent>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
