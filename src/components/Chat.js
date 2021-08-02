import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
import Message from "./Message";

function Chat() {
  const chatRef = useRef(null);

  //This will pull out the roomId, and then we will use this roomId in the ChatMessages and ChatInput to push the msges int it
  const roomId = useSelector(selectRoomId);

  //we get the room details so we can add the room details into the chat div
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  //we get the room messages
  const [roomMessages, loading, error] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  // console.log(roomDetails?.data());
  // console.log(roomMessages);

  //useEffect will render when the component mount as well when the roomId changes.
  //we will also use the loading variable form the useCollection. it means when the room is loading change or refine this code.
  //go to the chatReference and go to the current thing you pointing out and scrolldown
  //behavior: smooth will make it smoother when it scrolls down automatically to the end of the messages of the page
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {/* the channels and room messages will be shown if we click on them, if we havent click on any of them then just show an empty page in the chat div */}
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}

            {/* Auto scroll when we reach to the end of chat on viewport */}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.75;
  //overflow-y: scroll;
  overflow-y: auto; // if there is a necessatiy for it, it will have scrollbar if not then it wont
  margin-top: 60px;
  flex-grow: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  position: sticky;
  z-index: 999;
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

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
