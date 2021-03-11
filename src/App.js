import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
