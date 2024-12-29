import { Fragment, useState } from "react";
import ChatSideBarComponent from "../../components/chat-window/chat-sidebar/chat-sidebar";
import MainChatComponent from "../../components/chat-window/main-chat/main-chat";
import { useChatWindowModule } from "../hooks/useChatWindowModule";
import '../../assets/styles/chat.scss';

type Props = {
  queryType: number
}
const ChatWindow = ({ queryType }: Props) => {
  const {
    querMasterID, setQueryMasterID, collapseSidebar,
    handleCollapseSidebar, handleNewChat, currentUser
  } = useChatWindowModule();
  const [showNav, handleShowNav] = useState(window.outerWidth < 991 ? false : true);
  const handleShowHideSideBar = () => {
    handleShowNav((c) => !c);
  }
  return (<div className="tyn-root">
    <div className={`tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base ${collapseSidebar ? "collapse-sidebar" : ""}`}>

      {currentUser?.userID &&
        <Fragment>
          <ChatSideBarComponent
            currentUser={currentUser}
            queryType={queryType}
            querMasterID={querMasterID}
            newChat={handleNewChat} 
            setQueryMasterID={setQueryMasterID} 
            showNav={showNav}
            collapseSidebar={collapseSidebar} 
            handleCollapseSidebar={handleCollapseSidebar} />

          <MainChatComponent
            queryType={queryType}
            currentUser={currentUser}
            querMasterID={querMasterID}
            setQueryMasterID={setQueryMasterID}
            handleShowHideSideBar={handleShowHideSideBar} />
        </Fragment>
      }



    </div>
  </div>
  )
}
export default ChatWindow;
