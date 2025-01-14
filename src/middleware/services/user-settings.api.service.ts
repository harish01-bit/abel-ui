import { AppConfigUtil } from "../../helpers/app-config-util";
import { AuthenticationService } from "../../helpers/authetication.service";

export class UserSettingsApiService {
    GetUserSettings = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;

            const res = await fetch(baseUrl + "api/UserSettings/GetUserSettings", {
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
    GetUserSettingsDataList = async () => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;

            const res = await fetch(baseUrl + "api/UserSettings/GetUserSettingsDataList", {
                method: 'post',
                headers: AuthenticationService.getRequestHeaders()
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

            const res = await fetch(baseUrl + "api/UserSettings/SaveUserSettings", {
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