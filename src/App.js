import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </Router>
);

export default App;
