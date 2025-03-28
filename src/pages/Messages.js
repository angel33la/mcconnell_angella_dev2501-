//Parent/Smart Hooks Component: Messages.js
import React, { useState, useEffect } from 'react';

function Messages() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch conversations from API
    const fetchConversations = async () => {
      // Replace with actual API call
      const data = [
        { id: 1, user: 'User A', lastMessage: 'Hello!' },
        { id: 2, user: 'User B', lastMessage: 'How are you?' },
      ];
      setConversations(data);
    };

    fetchConversations();
  }, []);

  useEffect(() => {
    // Fetch messages for selected conversation
    const fetchMessages = async () => {
      if (selectedConversation) {
        // Replace with actual API call
        const data = [
          { id: 1, sender: 'User A', content: 'Hello!' },
          { id: 2, sender: 'You', content: 'Hi there!' },
        ];
        setMessages(data);
      }
    };

    fetchMessages();
  }, [selectedConversation]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      // Replace with actual API call to send message
      const newMessageData = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
      };
      setMessages([...messages, newMessageData]);
      setNewMessage('');
    }
  };

  return (
    <div className="messages-container">
      <div className="conversations-list">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="conversation-item"
            onClick={() => handleConversationClick(conversation)}
          >
            {conversation.user}
            <p>{conversation.lastMessage}</p>
          </div>
        ))}
      </div>
      <div className="selected-conversation">
        {selectedConversation ? (
          <>
            <h2>{selectedConversation.user}</h2>
            <div className="messages-list">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message-item ${
                    message.sender === 'You' ? 'sent' : 'received'
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <p>Select a conversation to view messages.</p>
        )}
      </div>
    </div>
  );
}

export default Messages;
