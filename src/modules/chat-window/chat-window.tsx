import { useState } from "react";
import ChatSideBarComponent from "../../components/chat-window/chat-sidebar/chat-sidebar";
import MainChatComponent from "../../components/chat-window/main-chat/main-chat";
import AuthHeaderComponent from "../../layout/header/auth-header";
import UnAuthHeaderComponent from "../../layout/header/unauth-header";


const ChatWindow = () => {

  const [querMasterID, setQueryMasterID] = useState<number>(0);
  // Function to clear the chat value
  const handleNewChat = () => {
    setQueryMasterID(0) // Clear the value
  };
  return (<div className="tyn-root">
    <AuthHeaderComponent />

    <div className="tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
      <ChatSideBarComponent newChat={handleNewChat} />
      <MainChatComponent querMasterID={querMasterID} setQueryMasterID={setQueryMasterID} />


    </div>
  </div>
  )
}
export default ChatWindow;
