import { useNavigate } from "react-router-dom";
import { clearUserDetails, getLocalStorage } from "./util.service"



/**
 * name
 */
export class AuthenticationService {

    static navigte = useNavigate();
    public static userLogout = () => {
        clearUserDetails();

        this.navigte("/login");
    }
    public static chkUserLogin = () => {

        const user = getLocalStorage("user");
        const token = getLocalStorage("token");
        if (user && token)
            return true
        else {
            clearUserDetails();
            return false;
        }

    }
    public static getRequestHeaders = () => {

        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Authorization': 'Bearer ' + getLocalStorage("token")
        }
    }

}
