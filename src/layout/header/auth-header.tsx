import { Fragment } from "react/jsx-runtime";
import NavigateLink from "../../components/ui-component/navigate-link/navigate-link";
import { AuthenticationService } from "../../helpers/authetication.service";
import { MdMenu } from "react-icons/md";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderComponent from "./header";

function AuthHeaderComponent(props: any) {



    return (
        <div className="row">
            <div className="col-12"> <HeaderComponent /></div>
            <div className="col-12">
                <Suspense>
                    <Outlet></Outlet>
                </Suspense>
                <footer
                    style={{
                        backgroundColor: '#ffffff',         // White background
                        padding: '1rem',
                        textAlign: 'center',
                        fontSize: '14px',
                        marginTop: 'auto',
                        borderTop: '1px solid #ddd'
                    }}
                >
                    <Link
                        to="/terms"
                        className="lnkfooter"
                        style={{ margin: '0 8px', color: '#333', textDecoration: 'none' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terms and Conditions
                    </Link>
                  
                    <Link
                        to="/privacy"
                        className="lnkfooter"
                        style={{ margin: '0 8px', color: '#333', textDecoration: 'none' }}
                    >
                        Privacy Policy
                    </Link>
                </footer>
            </div>

        </div>

    )
}

export default AuthHeaderComponent;