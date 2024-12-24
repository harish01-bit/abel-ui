import { useState } from "react";
import SidebarBottomLinks from "./chat-sidebar-bottom-link";
import { MdMenu } from "react-icons/md";
import { useChatSideBar } from "../../hooks/useChatSideBar";
import { ChatMasterComponent } from "./chat-master/chat-master";


function ChatSideBarComponent({ newChat, collapseSidebar, handleCollapseSidebar, currentUser,setQueryMasterID, querMasterID,queryType }: any) {
    const { handleNewChat, handlerToggleSideBar, querymasterList } = useChatSideBar({ newChat, handleCollapseSidebar, currentUser,setQueryMasterID ,queryType});

 
    return (
        <div className={`tyn-aside tyn-aside-base ${collapseSidebar ? "collapse-sidebar" : ""}`}>
            <div className="tyn-aside-head">
                <div className="tyn-aside-head-text">
                    <span className="toggleIcon" onClick={handlerToggleSideBar}>
                        <MdMenu />
                    </span>
                    {/*<span className="tyn-subtext">200+ Conversations </span>*/}
                </div>

                <div className="tyn-aside-head-tools">
                    <ul className="tyn-list-inline gap gap-3">
                        <li>
                            <a
                                className="btn btn-light btn-md btn-pill new-chat-btn"

                                onClick={handleNewChat}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-plus-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                    />
                                </svg>
                                <span>New chat</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Recent {queryType==1 ? ' Text Chat':' Audio Chat '}
                        </li>
                    </ul>
                </div>

            </div>

            <div className="tyn-aside-body" data-simplebar="">
                <ul className="tyn-aside-list">
                    {querymasterList?.map(q =>
                        <ChatMasterComponent setQueryMasterID={setQueryMasterID} key={q.clientQueryMasterID} querMasterID={querMasterID} queryMaster={q} />
                    )

                    }
                </ul>

            </div>

            <SidebarBottomLinks />
        </div>
    )

}

export default ChatSideBarComponent;