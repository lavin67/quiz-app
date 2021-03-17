import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/Landing/Landing";
import QuizPropertyPage from "./components/pages/QuizProperty/QuizProperty";
import Quiz from "./components/pages/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/quiz-property" component={QuizPropertyPage} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </div>
  );
}

export default App;
