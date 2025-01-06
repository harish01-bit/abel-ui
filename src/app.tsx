
import AppRoute from "./routes/app-route";

import { BrowserRouter, useNavigate } from "react-router-dom";
import { useAppconfig } from "./helpers/app-config.service";
import { useLoadAppConfig } from "./hooks/useLoadAppConfig";
import { useEffect } from "react";
import { AuthenticationService } from "./helpers/authetication.service";

import './assets/styles/common.scss';
import useUserSesstion from "./hooks/useUserSession";

export function SessionChk({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  useUserSesstion(AuthenticationService.userLogout, 20 * 60 * 1000);
  useEffect(() => {

    if (AuthenticationService.chkUserLogin()) {
      navigate("/chat");
    }
    else {
      navigate("/login");
    }


  }, [])
  return <> {children}</>
}
export function App() {
  const loadConfigState = useLoadAppConfig('/config.json');

  return (

    loadConfigState && loadConfigState.status === 'success' ? (
      <div className="app-container">
        <SessionChk>
          <AppRoute />
        </SessionChk>


      </div>
    ) : <span>loading</span>

  );
}

export default App;