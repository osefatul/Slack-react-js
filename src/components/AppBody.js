import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function AppBody() {
  return (
    <BodyContainer>
      <Sidebar />
    </BodyContainer>
  );
}

export default AppBody;

const BodyContainer = styled.div`
  display: flex;
  height: 100vh;
`;
