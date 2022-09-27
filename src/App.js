import { ThemeProvider } from "styled-components";
import { GlobalStyle, rootTheme } from "./components/Theme";
import Header from "./containers/Header";
import HomePage from "./containers/Home";

function App() {
  return (
    <ThemeProvider theme={rootTheme}>
      <GlobalStyle />
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
