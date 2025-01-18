import { useEffect, useState } from "react";
import { AuthenticationService } from "../../helpers/authetication.service";

export const useChatWindowModule= () => {
    const [querMasterID, setQueryMasterID] = useState<number>(0);
    const [chatBehaviour, setChatBehaviour] = useState<number>(0);
    const [collapseSidebar,setCollapseSidebar] = useState<boolean>(window.outerWidth < 768 ? true : false);
    const [showNav,setShowNav] = useState<boolean>(window.outerWidth < 768 ? true : false);
    const [currentUser, setCurrentUser] = useState<any>({ ...AuthenticationService.currentUser }); // Load user state
    
    showNav ? document.querySelector('body')?.classList.add('hide-nav') : document.querySelector('body')?.classList.remove('hide-nav');

    useEffect(() => {
        const fetchUser = async () => {
            const user = await AuthenticationService.currentUser;

            setCurrentUser(user);
        };
        fetchUser();
    }, [AuthenticationService.currentUser]);

    const handleCollapseSidebar = () => {
      !collapseSidebar ? document.querySelector('body')?.classList.add('collapse-sidebar') : document.querySelector('body')?.classList.remove('collapse-sidebar');
      setCollapseSidebar((c) => !c);
    }
    const handleShowHideSideBar = () => {
      showNav ? document.querySelector('body')?.classList.add('hide-nav') : document.querySelector('body')?.classList.remove('hide-nav');
      setShowNav((c) => !c);
    }
    // Function to clear the chat value
    const handleNewChat = () => {
      setQueryMasterID(0) 
      setChatBehaviour(0)// Clear the value
      
    };
    return {
        querMasterID,setQueryMasterID,collapseSidebar,setCollapseSidebar,
        handleCollapseSidebar,showNav, handleShowHideSideBar, handleNewChat,currentUser,chatBehaviour,setChatBehaviour
    }
}