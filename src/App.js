import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AppBody from "./components/AppBody";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />

          <AppBody>
            <Switch>
              <Route path="/" exact>
                {/*Chat*/}
              </Route>

              <Route path="/"></Route>

              <Route path=""></Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;
