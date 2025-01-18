import { Fragment } from "react/jsx-runtime";
import NavigateLink from "../../components/ui-component/navigate-link/navigate-link";
import { AuthenticationService } from "../../helpers/authetication.service";
import { MdMenu } from "react-icons/md";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import './header.scss';
import { useChatWindowModule } from "../../modules/hooks/useChatWindowModule";

function HeaderComponent(props: any) {

    const logOut = () => {
        AuthenticationService.userLogout();
    }
    const {showNav, handleShowHideSideBar} = useChatWindowModule();
      console.log(showNav)
    return (
      
            <nav className={`tyn-appbar`}>
                <div className="tyn-appbar-wrap">
                    <div className="tyn-appbar-logo">
                        <span className="toggleIcon d-lg-none" onClick={handleShowHideSideBar}>
                            <MdMenu />
                        </span>
                        <a className="tyn-logo" href="index.html">
                            <img src="/letter-a.gif" className="a-gif" />
                            Abel
                        </a>
                    </div>
                    {/* .tyn-appbar-logo */}
                    <div className="tyn-appbar-content">
                        <ul className="tyn-appbar-nav ">
                            <li className="tyn-appbar-item dropdown">
                                <NavigateLink link="/chat" text="Text" />
                            </li>
                            <li className="tyn-appbar-item dropdown">
                                {AuthenticationService.currentUser?.roleID == 1 && <NavigateLink link="/audio" text="Audio" />}
                            </li>

                        </ul>
                        {/* .tyn-appbar-nav */}
                        <ul className="tyn-appbar-nav tyn-appbar-nav-end">
                            <li className="tyn-appbar-item dropdown">
                                <a
                                    onClick={logOut}
                                    className="tyn-appbar-link dropdown-toggle"
                                    data-bs-toggle="dropdown"

                                    data-bs-offset="0,10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1z" />
                                        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                    </svg>
                                    <span className="d-none">Log Out</span>
                                </a>

                            </li>



                        </ul>

                    </div>

                </div>

            </nav>
          
      
    )
}

export default HeaderComponent;