import { Fragment, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import FooterComponent from "../footer/footer";

function UnAuthHeaderComponent() {
    return (
<Fragment>
        <div className="row">
            <div className="col-12"> <nav className={`tyn-appbar no-sidebar`}>
                <div className="tyn-appbar-wrap">
                    <div className="tyn-appbar-logo">

                        <a className="tyn-logo">
                            <img src="/letter-a.gif" className="a-gif" />
                            Abel
                        </a>
                    </div>
                </div>
            </nav></div>
            </div>
            <div className="col-12">
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
                <FooterComponent/>
            </div>

            </Fragment>

    )
}

export default UnAuthHeaderComponent;

