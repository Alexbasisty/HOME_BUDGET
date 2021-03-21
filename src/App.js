import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useTranslation } from "react-i18next";

import { Navigation, Wrapper, LoadingIndicator, Button } from "components";

import theme from "utils/theme";

function App() {
  // eslint-disable-next-line
  // const { t, i18n } = useTranslation("common");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
          RightElement={
            <div>
              <Button variant="inline">pl</Button>
              <Button variant="inline">en</Button>
            </div>
          }
        />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <LoadingIndicator />
            </Route>
            <Route path="/budget">Budget page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

// const RootApp = () => (
//   <React.Suspense fallback="Loading...">
//     <App />
//   </React.Suspense>
// );

export default App;
