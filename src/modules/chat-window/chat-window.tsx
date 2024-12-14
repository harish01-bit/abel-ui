import ChatSideBarComponent from "../../components/chat-window/chat-sidebar/chat-sidebar";
import MainChatComponent from "../../components/chat-window/main-chat/main-chat";
import AuthHeaderComponent from "../../layout/header/auth-header";
import UnAuthHeaderComponent from "../../layout/header/unauth-header";


const ChatWindow = () => {

  return (<div className="tyn-root">
    <AuthHeaderComponent />

    <div className="tyn-content tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
      <ChatSideBarComponent />
      <MainChatComponent />


    </div>
  </div>
  )
}
export default ChatWindow;
