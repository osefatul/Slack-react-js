import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>

            <Route path="/"></Route>

            <Route path=""></Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
