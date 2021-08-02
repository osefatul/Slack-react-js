import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import { HelpOutline, Search } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      {/*Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
          //TODO Add onClick
        />
        <AccessTime />
      </HeaderLeft>

      {/*Header center --- Search bar */}
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="search WDK" />
      </HeaderSearch>

      {/*Header Right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(
    --slack-color
  ); // we defined this variable in the index.css
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.25;
  display: flex;
  align-items: center;
  margin-left: 20px;

  //lets target component inside the headerLeft whcih is AccessTime Icon
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.45;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
