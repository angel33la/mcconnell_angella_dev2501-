import React, { useState } from "react";
import { useNavigate } from "react-router";

const Notification = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { id: 1, message: "New message from Billy Bob" },
    { id: 2, message: "Patty Jane liked your post" },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const [conversations] = useState([
    { id: 1, user: "Billy Bob", lastMessage: "Hello!" },
    { id: 2, user: "Patty Jane", lastMessage: "How are you?" },
  ]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleNavigateToMessages = () => {
    const queryParams = new URLSearchParams({
      notifications: JSON.stringify(notifications),
      messages: JSON.stringify(messages),
    });

    const url = `../pages/Messages.js?${queryParams.toString()}`;
    console.log("Navigating to:", url); // Debugging the URL
    navigate(url);
  };

  const handleToggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleAddNotification = () => {
    const newNotif = {
      id: notifications.length + 1,
      message: "New notification message",
    };
    setNotifications([...notifications, newNotif]);
  };

  const handleDeleteNotification = (notificationId) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId
    );
    setNotifications(updatedNotifications);
  };

  const handleConversationClick = (conversation) => {
    setMessages([
      { id: 1, sender: conversation.user, content: "Hi there!" },
      { id: 2, sender: "You", content: "Hello!" },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="notification">
      <h1>Notification</h1>
      <button onClick={handleToggleNotifications}>
        {showNotifications ? "Hide Notifications" : "Show Notifications"}
      </button>
      {showNotifications && (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.message}
              <button onClick={() => handleDeleteNotification(notification.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleAddNotification}>Add Notification</button>

      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            onClick={() => handleConversationClick(conversation)}
          >
            {conversation.user}: {conversation.lastMessage}
          </li>
        ))}
      </ul>

      <div className="messages">
        <h2>Messages</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.sender}: {message.content}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <button onClick={handleNavigateToMessages}>Go to Messages Page</button>
    </div>
  );
};

export default Notification;
