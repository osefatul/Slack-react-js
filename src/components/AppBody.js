import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AppBody() {
  return (
    <BodyContainer>
      <Sidebar />

      <Switch>
        <Route path="/" exact>
          <Chat />
        </Route>
      </Switch>
    </BodyContainer>
  );
}

export default AppBody;

const BodyContainer = styled.div`
  display: flex;
  height: 100vh;
`;
