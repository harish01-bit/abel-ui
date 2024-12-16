import { useState } from "react";
import SidebarBottomLinks from "./chat-sidebar-bottom-link";
import { MdMenu } from "react-icons/md";

function ChatSideBarComponent({newChat,collapseSidebar,handleCollapseSidebar}: any) {
    const handleNewChat = () => {
        console.log("hi")
        newChat();
    }
    const handlerToggleSideBar = () => {
        handleCollapseSidebar();
    }
    return (
        <div className={`tyn-aside tyn-aside-base ${collapseSidebar ? "collapse-sidebar" : ""}`}>
            <div className="tyn-aside-head">
                <div className="tyn-aside-head-text">
                    <span className="toggleIcon" onClick={handlerToggleSideBar}>
                        <MdMenu/>
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
                </div>
                {/* .tyn-aside-head-tools */}
            </div>
            {/* .tyn-aside-head */}
            <div className="tyn-aside-body" data-simplebar="">
                <ul className="tyn-aside-list">
                    <li className="tyn-aside-item js-toggle-main ">
                        <div className="tyn-media-group">
                            <div className="tyn-size-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    style={{ width: 24, height: 24 }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z"
                                    />
                                </svg>
                            </div>
                            <div className="tyn-media-col">
                                <div className="content">Home</div>
                            </div>
                        </div>
                        {/* .tyn-media-group */}
                    </li>

                </ul>
                {/* .tyn-aside-list */}
            </div>
            {/* .tyn-aside-body */}
            <SidebarBottomLinks/>
        </div>
    )

}

export default ChatSideBarComponent;