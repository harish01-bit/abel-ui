import { Fragment, useState } from "react";
import ChatSideBarComponent from "../../components/chat-window/chat-sidebar/chat-sidebar";
import MainChatComponent from "../../components/chat-window/main-chat/main-chat";
import { useChatWindowModule } from "../hooks/useChatWindowModule";


const ChatWindow = () => {
  const {
    querMasterID, setQueryMasterID, collapseSidebar,
    handleCollapseSidebar, handleNewChat, currentUser
  } = useChatWindowModule();

  return (<div className="tyn-root">
    <div className={`tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base ${collapseSidebar ? "collapse-sidebar" : ""}`}>

      {currentUser?.userID &&
        <Fragment>
          <ChatSideBarComponent 
               currentUser={currentUser} 
          newChat={handleNewChat} setQueryMasterID={setQueryMasterID} collapseSidebar={collapseSidebar} handleCollapseSidebar={handleCollapseSidebar} />

          <MainChatComponent
          currentUser={currentUser} 
          querMasterID={querMasterID} 
          setQueryMasterID={setQueryMasterID} />
        </Fragment>
      }



    </div>
  </div>
  )
}
export default ChatWindow;
