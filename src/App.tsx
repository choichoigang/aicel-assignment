import React from "react";
import { Switch, Route } from "react-router-dom";

/* Style */
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

/* Component */
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/modal" component={Modal} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
