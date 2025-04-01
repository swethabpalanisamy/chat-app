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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <section style={{ width: "25%", height: "100vh", backgroundColor: "" }}>
        <ul style={{ margin: "0", padding: "0" }}>
          {contactList.map((contact, index) => {
            return (
              <>
                <CustomList key={index}>{contact}</CustomList>
                <hr style={{ borderColor: "black" }} />
              </>
            );
          })}
        </ul>
      </section>
      <section
        style={{ width: "75%", height: "100vh", backgroundColor: "yellow" }}
      ></section>
    </div>
  );
}

export default ChatPage;
