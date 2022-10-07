import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, rootTheme } from "./components/Theme";
import Header from "./containers/Header";
import HomePage from "./containers/Home";
export const CartHandleContext = createContext();

function App() {
  const [cart, setCart] = useState({});
  return (
    <ThemeProvider theme={rootTheme}>
      <CartHandleContext.Provider value={{ cart, setCart }}>
        <GlobalStyle />
        <Header />
        <HomePage />
      </CartHandleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
