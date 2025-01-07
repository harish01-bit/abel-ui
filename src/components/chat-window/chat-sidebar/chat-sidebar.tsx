import { useState } from "react";
import SidebarBottomLinks from "./chat-sidebar-bottom-link";
import { MdMenu } from "react-icons/md";
import { useChatSideBar } from "../../hooks/useChatSideBar";
import { ChatMasterComponent } from "./chat-master/chat-master";


function ChatSideBarComponent({ showNav, newChat, collapseSidebar, handleCollapseSidebar, currentUser,setQueryMasterID, querMasterID,queryType ,setChatBehaviour}: any) {
    const { handleNewChat, handlerToggleSideBar, querymasterList } = useChatSideBar({ newChat, handleCollapseSidebar, currentUser,setQueryMasterID ,queryType,setChatBehaviour});

    return (
        <div className={`tyn-aside tyn-aside-base ${showNav ? '' : 'hide-nav'}`}>
            <div className="tyn-aside-head">
                <div className="tyn-aside-head-text">
                    <span className="toggleIcon d-none d-lg-block" onClick={handlerToggleSideBar}>
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
                    <ul className={`${collapseSidebar ? 'collapsed-item' : ''}`}>
                        <li>
                            Recent {queryType==1 ? ' Text Chat':' Audio Chat '}
                        </li>
                    </ul>
                </div>

            </div>

            <div className={`tyn-aside-body ${collapseSidebar ? 'collapsed-item' : ''}`} data-simplebar="">
                <ul className="tyn-aside-list">
                    {querymasterList?.map(q =>
                        <ChatMasterComponent setChatBehaviour={setChatBehaviour}   setQueryMasterID={setQueryMasterID} key={q.clientQueryMasterID} querMasterID={querMasterID} queryMaster={q} />
                    )

                    }
                </ul>

            </div>

            <SidebarBottomLinks collapseSidebar/>
        </div>
    )

}

export default ChatSideBarComponent;