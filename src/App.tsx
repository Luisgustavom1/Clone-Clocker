import Header from "./pages/Header";
import InitialPage from "./pages/InitialPage";
import { ContainerContent, GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerContent>
        <Header />
        <InitialPage />
      </ContainerContent>
    </>
  );
}

export default App;
