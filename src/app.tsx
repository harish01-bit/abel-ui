
import AppRoute from "./routes/app-route";

import { BrowserRouter, useNavigate } from "react-router-dom";
import { useAppconfig } from "./helpers/app-config.service";
import { useLoadAppConfig } from "./hooks/useLoadAppConfig";
import { useEffect } from "react";
import { AuthenticationService } from "./helpers/authetication.service";

import './assets/styles/common.scss';
import useUserSesstion from "./hooks/useUserSession";
import { useLocation } from 'react-router-dom';
export function SessionChk({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation();
  useUserSesstion(AuthenticationService.userLogout, 20 * 60 * 1000);
  useEffect(() => {

    if (AuthenticationService.chkUserLogin()) {
      if (location.pathname == "/login")
        navigate("/chat");
      else
        navigate(location.pathname)
    }
    else {
      navigate("/login");
    }


  }, [])
  return <> {children}</>
}


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export function App() {
  const loadConfigState = useLoadAppConfig('/config.json');

  return (

    loadConfigState && loadConfigState.status === 'success' ? (
      <div className="app-container">
        <SessionChk>
          <ScrollToTop/>
          <AppRoute />
        </SessionChk>


      </div>
    ) : <span>loading</span>

  );
}

export default App;