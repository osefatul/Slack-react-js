import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/firebase";
import "./App.css";

function App() {
  const [login, loading] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody />
        </>
      </Router>
    </div>
  );
}

export default App;
