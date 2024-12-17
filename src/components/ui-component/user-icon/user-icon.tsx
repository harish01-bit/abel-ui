import { Fragment } from "react/jsx-runtime";
import { AuthenticationService } from "../../../helpers/authetication.service";

function UserIConComponent() {

    const userLogo = AuthenticationService.currentUser.firstName.substr(0, 1) + AuthenticationService.currentUser.surname.substr(0, 1)
    return (

        <div className="avtar">{userLogo}</div>


    )
}
export default UserIConComponent;