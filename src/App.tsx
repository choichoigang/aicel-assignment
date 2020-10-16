import React from "react";
import { Switch, Route } from "react-router-dom";

/* Style */
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

/* Component */
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/modal" component={Modal} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
