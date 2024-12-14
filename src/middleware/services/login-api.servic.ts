import { AppConfigUtil } from "../../helpers/app-config-util";
import { AuthenticationService } from "../../helpers/authetication.service";

export class LoginApiService {
    AutheticateUser = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
          
            const res = await fetch(baseUrl + "User/Autheticate", {
                method: 'post',
                headers:AuthenticationService.getRequestHeaders(),
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data.isSuccess) {

                return data;

            }
            else {
                return null;
            }
        } catch (ex) {
            console.log(ex)
            return null
        }
    };
    RefreshToken = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
       
            const res = await fetch(baseUrl + "User/RefreshToken", {
                method: 'post',
                headers: AuthenticationService.getRequestHeaders(),
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data.isSuccess) {

                return data;

            }
            else {
                return null;
            }
        } catch (ex) {
            console.log(ex)
            return null
        }
    };
}