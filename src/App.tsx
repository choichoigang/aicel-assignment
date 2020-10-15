import React from "react";

/* Style */
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

/* Component */
import Test from "./components/Test";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Test />
      </ThemeProvider>
    </div>
  );
}

export default App;
