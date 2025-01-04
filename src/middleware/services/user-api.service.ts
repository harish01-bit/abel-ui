import { AppConfigUtil } from "../../helpers/app-config-util";
import { AuthenticationService } from "../../helpers/authetication.service";

export class UserApiService {
    GetUserSettings = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;

            const res = await fetch(baseUrl + "User/GetUserSettings", {
                method: 'post',
                headers: AuthenticationService.getRequestHeaders(),
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data?.isSuccess) {

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


    SaveUserSettings = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;

            const res = await fetch(baseUrl + "User/SaveUserSettings", {
                method: 'post',
                headers: AuthenticationService.getRequestHeaders(),
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data?.isSuccess) {

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