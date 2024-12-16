import React, { createContext, useState } from 'react';

// 1. Create the context
export const ChatContext = createContext();

// 2. Create a provider component
export const ChatProvider = ({ children }) => {
  const [chatHistoryList, setChatHistoryList] = useState([]);

  // Function to add a new message to the chat history
  const addMessage = (message) => {
    setChatHistoryList((prevChat) => [...prevChat, message]);
  };

  return (
    <ChatContext.Provider value={{ chatHistoryList, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
