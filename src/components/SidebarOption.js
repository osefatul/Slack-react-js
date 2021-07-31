import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title, AddChannelOption }) {
  return (
    <SidebarOptionContainer>
      {/* we might render the component now without passing an ICon */}
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}

      {/* if you pass an Icon then render title*/}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.div``;
