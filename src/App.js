import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyle, rootTheme } from "./components/Theme";
import Header from "./containers/Header";
import HomePage from "./containers/HomePage";

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
