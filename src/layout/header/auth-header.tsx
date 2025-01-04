import { Fragment } from "react/jsx-runtime";
import NavigateLink from "../../components/ui-component/navigate-link/navigate-link";
import { AuthenticationService } from "../../helpers/authetication.service";
import { MdMenu } from "react-icons/md";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./header";

function AuthHeaderComponent(props: any) {



    return (
        <div className="row">
            <div className="col-12"> <HeaderComponent /></div>
            <div className="col-12">
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
            </div>
        </div>
    )
}

export default AuthHeaderComponent;