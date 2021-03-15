import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/Landing/Landing";
import QuizPropertyPage from './components/pages/QuizProperty/QuizProperty';
import Questions from './components/pages/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/quiz-property"  component={QuizPropertyPage} />
        <Route path="/questions"  component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
