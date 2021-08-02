import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./components/firebase";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
