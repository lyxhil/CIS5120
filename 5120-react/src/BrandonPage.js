import React, { useState } from 'react';
import Frame from './Frame';
import StatusBar from './StatusBar';

// Chat message component to display individual messages
const ChatMessage = ({ message, isSender }) => {
  return (
    <Frame>
            <StatusBar />
    <div style={{ textAlign: isSender ? 'right' : 'left', margin: '5px' }}>
      <div style={{ backgroundColor: isSender ? '#DCF8C6' : '#E5E5EA', padding: '10px', borderRadius: '10px', display: 'inline-block' }}>
        {message}
      </div>
    </div>
    </Frame>
  );
};

// Chat page component
const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hey there!", isSender: true },
    { text: "Hi! How are you?", isSender: false },
    { text: "I'm good, thanks!", isSender: true },
    { text: "That's great!", isSender: false }
    // Add more messages as needed
  ]);

  // Function to handle sending a new message
  const sendMessage = () => {
    const newMessage = { text: "New message", isSender: true }; // Change the text and sender as needed
    setMessages([...messages, newMessage]);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', marginTop: '50px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', minHeight: '300px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isSender={message.isSender} />
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input type="text" placeholder="Type your message..." style={{ width: 'calc(100% - 80px)', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button onClick={sendMessage} style={{ marginLeft: '10px', padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#007AFF', color: 'white' }}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;