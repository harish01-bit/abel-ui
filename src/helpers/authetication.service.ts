import { useNavigate } from "react-router-dom";
import { clearUserDetails, getLocalStorage } from "./util.service"



/**
 * name
 */
export class AuthenticationService {

    public static currentUser: any;
    public static isUserLoggedIn: boolean;
    public static userLogout = () => {
        clearUserDetails();
        window.location.href = "/login";

    }
    public static chkUserLogin = () => {

        const user = getLocalStorage("user");
        const token = getLocalStorage("token");
        if (user && token) {
            this.currentUser = { ...user }
         
            this.isUserLoggedIn = true;
            return true
        }

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
            'Authorization': 'Bearer ' + getLocalStorage("token"),
            'User-Agent': navigator.userAgent
        }
    }

}
