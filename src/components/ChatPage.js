import React, { useEffect, useState } from "react";
import { chatMessages } from "../constants/chatMessages";
import styled from "styled-components";

const CustomList = styled.li`
  list-style: none;
  //   width: 100px;
  //   border: 1px solid black;
  //   border-bottom: none;
  padding: 10px;
  text-align: center;
`;
function ChatPage() {
  const [chatMessage, setChatMessage] = useState({});
  const [contactList, setContactList] = useState([]);
  const [chatList, setChatList] = useState(null);
  const [currentChat, setCurrentChat] = useState("");
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    let contact = Object.keys(chatMessages);
    let chatmessage = chatMessages.reduce((acc, cur) => {
      if (!(cur.contactName in acc)) {
        acc[cur.contactName] = [];
      }
      acc[cur.contactName] = [...acc[cur.contactName], { ...cur }];
      return acc;
    }, {});
    setChatMessage({ ...chatmessage });
    setContactList(Object.keys(chatmessage));
  }, []);
  console.log(contactList, "contactList", chatMessage);

  const chatTrue = (index) => {
    console.log(index, chatMessage[contactList[index]]);
    setCurrentChat(contactList[index]);
    setChatList(chatMessage[contactList[index]][0]);
  };

  const sendMessage = () => {
    console.log("sent", "-", typedMessage);
    let chatm = chatMessage;
    console.log(chatm[currentChat][0].messages, "chatm[currentChat][0]");
    chatm[currentChat][0].messages.push({
      message: typedMessage,
      sent: true,
      timestamp: Date.now(),
    });
    console.log(chatm[currentChat][0], "chatm[currentChat][0]");
    setTypedMessage("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "100vh",
      }}
    >
      <section style={{ width: "25%", backgroundColor: "" }}>
        <ul style={{ margin: "0", padding: "0" }}>
          {contactList.map((contact, index) => {
            return (
              <div
                onClick={() => chatTrue(index, contact)}
                style={{ cursor: "pointer" }}
              >
                <CustomList key={index}>{contact}</CustomList>
                <hr style={{ borderColor: "black" }} />
              </div>
            );
          })}
        </ul>
      </section>
      <section
        style={{
          width: "75%",
          padding: "10px",
          display: "flex",
          alignContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          {chatList &&
            chatList.messages.map((chatmessage) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: !chatmessage.sent
                      ? "flex-start"
                      : "flex-end",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      width: "50%",
                      padding: "10px",
                    }}
                  >
                    <span>{chatmessage.message}</span>
                    <span>{chatmessage.timestamp}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
            id="typemessage"
            style={{ width: "75px" }}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </section>
    </div>
  );
}

export default ChatPage;
