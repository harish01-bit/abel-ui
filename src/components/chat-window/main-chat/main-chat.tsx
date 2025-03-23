import { Fragment } from "react/jsx-runtime";
import { useChatWindow } from "../../hooks/useChatWindow";
import IconComponent from "../../ui-component/icon/icon";
import ChatRequestComponent from "./chat-request/chat-request";
import ChatResponseComponent from "./chat-response/chat-response";
import AuthHeaderComponent from "../../../layout/header/auth-header";
import { MdOutlineAttachment } from "react-icons/md";
import ChatAudioResponseComponent from "./chat-audio-response/chat-audio-response";
import AudioPlayerComponent from "../../ui-component/audio-player/audio-player";
import HeaderComponent from "../../../layout/header/header";
import { useEffect, useRef } from "react";

type Props = {
    querMasterID: any
    setQueryMasterID: any
    currentUser: any
    queryType: number
    handleShowHideSideBar: any
    chatBehaviour: number
}

function MainChatComponent({ querMasterID, setQueryMasterID, currentUser, queryType, handleShowHideSideBar, chatBehaviour }: Props) {

    const { handleSend, messages, setMessages, input, setInput, isProcessing } = useChatWindow({ querMasterID, setQueryMasterID, currentUser, queryType });
    const latestAIResponseRef  = useRef<HTMLDivElement | null>(null);
  
    // Scroll to the bottom whenever messages change
    useEffect(() => {
        latestAIResponseRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>


            <div className="chat-main">


                <div className="chat-wrapper">
                    <div className="message-container">
                        {chatBehaviour == 1 && 'Pastor'}
                        {chatBehaviour == 2 && 'Intelligent Book'}
                        <div className="message-wrapper">
                           
                            {messages.map((msg, index) => {
                                const isLast = index === messages.length - 1;
                                const isAI = msg.sender === "ai";

                                return (
                                    <Fragment key={index}>
                                        {msg.sender === "user" && (
                                            <ChatRequestComponent key={index} message={msg.text} />
                                        )}
                                        {isAI && queryType === 1 && (
                                            <div ref={isLast ? latestAIResponseRef : null}>
                                                <ChatResponseComponent message={msg.text} />
                                            </div>
                                        )}
                                        {isAI && queryType === 2 && (
                                            <div ref={isLast ? latestAIResponseRef : null}>
                                                <ChatAudioResponseComponent message={msg.text} />
                                            </div>
                                        )}
                                    </Fragment>
                                );
                            })}

                        </div>

                    </div>
                </div>

                <div className="query-box-container">
                    <div className="form-wrapper">
                        <div className="input-attachment">
                            <MdOutlineAttachment />
                        </div>
                        <form onSubmit={handleSend}>
                            <input
                                type="text"
                                className="question-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isProcessing}
                                placeholder="Ask anything about your conversation..."
                            />
                            <div onClick={handleSend} className="input-action">
                                <span className="submit">
                                    <IconComponent fill="currentColor" size={24} pathData="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" />

                                </span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MainChatComponent;