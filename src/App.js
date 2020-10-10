import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Switch>
      <Route component={LandingPage} />
    </Switch>
  );
}

export default App;
