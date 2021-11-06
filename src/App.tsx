import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilterPage from "./views/pages/filterpage";
import HomePage from "./views/pages/homepage";
//import LandingPage from "./views/pages/landingpage";
import LoginPage from "./views/pages/loginsignup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/search">
          <FilterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
  // return <LandingPage />;
}

export default App;
