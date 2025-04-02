import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router";

function Messages(){
  // const location = useLocation();
  // const [messages] = useState([]);
  // const [conversations] = useState([
  //     { id: 1, user: "Billy Bob", lastMessage: "Hello!" },
  //     { id: 2, user: "Patty Jane", lastMessage: "How are you?" },
  //   ]);
  // const [newMessage, setNewMessage] = useState("");
  // Removed unused notifications state

  // useEffect(() => {
    // Parse query parameters when the component mounts
    // Removed unused queryParams variable

    // Removed unused parsedNotifications variable
    // const parsedMessages = JSON.parse(queryParams.get("messages") || "[]");

    // Removed setNotifications as notifications state is no longer used
  // }, [location.search]); // Re-run the effect if the location changes

  // const handleConversationClick = (conversation) => {
  //   console.log("Conversation clicked:", conversation);
  //   // Add logic to handle conversation click, e.g., load messages for the conversation
  // };

  // const handleSendMessage = (e) => {
  //   e.preventDefault();
  //   if (newMessage.trim()) {
  //     console.log("Message sent:", newMessage);
  //     setNewMessage("");
  //   }
  // };

  return (
    <>
      <h1>Messages</h1>

      {/* <h2>Conversations</h2> */}
      {/* <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            onClick={() => handleConversationClick(conversation)}
          >
            {conversation.user}: {conversation.lastMessage}
          </li>
        ))}
      </ul> */}

      {/* <div className="messages"> */}
        {/* <h2>Messages</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.sender}: {message.content}
            </li>
          ))}
        </ul> */}
        {/* <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form> */}
      {/* </div> */}
    </>
  );
};

export default React.memo(Messages);
