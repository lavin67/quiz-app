import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/Landing/Landing";
import QuizPropertyPage from './components/pages/QuizProperty/QuizProperty';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/quiz-property"  component={QuizPropertyPage} />
      </Switch>
    </div>
  );
}

export default App;
