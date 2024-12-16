import { useState } from "react";
import ChatSideBarComponent from "../../components/chat-window/chat-sidebar/chat-sidebar";
import MainChatComponent from "../../components/chat-window/main-chat/main-chat";


const ChatWindow = () => {

  const [querMasterID, setQueryMasterID] = useState<number>(0);
  const [collapseSidebar,setCollapseSidebar] = useState<boolean>(false);

  const handleCollapseSidebar = () => {
    setCollapseSidebar((c) => !c);
  }
  // Function to clear the chat value
  const handleNewChat = () => {
    setQueryMasterID(0) // Clear the value
  };
  return (<div className="tyn-root">
    <div className={`tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base ${collapseSidebar ? "collapse-sidebar" : ""}`}>
      <ChatSideBarComponent newChat={handleNewChat} collapseSidebar={collapseSidebar} handleCollapseSidebar={handleCollapseSidebar} />
      <MainChatComponent querMasterID={querMasterID} setQueryMasterID={setQueryMasterID} />


    </div>
  </div>
  )
}
export default ChatWindow;
