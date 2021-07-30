import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <HeaderContainer>
      {/*Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        //ToDO Add onClick
        />
        <AccessTime />
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const HeaderAvatar = styled(Avatar)``;
