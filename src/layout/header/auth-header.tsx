
import { Suspense, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderComponent from "./header";
import useUserSesstion from "../../hooks/useUserSession";
import FooterComponent from "../footer/footer";

function AuthHeaderComponent(props: any) {



    return (
      <div className="row">
            <div className="col-12"> <HeaderComponent /></div>
            <div className="col-12">
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
             
            </div>
            <FooterComponent/>
        </div>
       


    )
}

export default AuthHeaderComponent;