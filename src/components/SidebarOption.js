import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = () => {};
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      // if addChannelOption is there then add chanell otherwise select the channel
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* Render the component now if Icon is there */}
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {/* if you pass an Icon then render title as well*/}
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
