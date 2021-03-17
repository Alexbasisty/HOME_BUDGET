import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigation } from "components";

import theme from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation items={[]} />
        <Switch>
          <Route exact path="/">
            Home Page
          </Route>
          <Route path="/budget">Budget page</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
