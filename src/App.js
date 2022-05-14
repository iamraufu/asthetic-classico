import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Executives from './Components/Executives/Executives';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Registration from './Components/Registration/Registration';
import Events from './Components/Events/Events';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/executives">
          <Executives />
        </Route>

        <Route path="/events">
          <Events />
        </Route>

        <Route path="/leaderboard">
          <Leaderboard />
        </Route>

        <Route path="/registration">
          <Registration />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
