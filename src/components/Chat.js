import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "./firebase";

function Chat() {
  //This will pull out the roomId, and then we will use this roomId in the ChatMessages and ChatInput to push the msges int it
  const roomId = useSelector(selectRoomId);

  //we get the room details so we can add the room details into the chat div
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  //we get the room messages
  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  console.log(roomDetails);
  console.log(roomMessages);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>{/* List out All the Messages */}</ChatMessages>

        <ChatInput channelId={roomId} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.75;
  margin-top: 60px;
  overflow-y: scroll;
  flex-grow: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

// --------------------------------- Chat Messages

const ChatMessages = styled.div``;
