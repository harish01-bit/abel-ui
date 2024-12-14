import { AppConfigUtil } from "../../helpers/app-config-util";

export class ChatApiService {
    SendMessageRequest = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
            console.log(baseUrl)
            const res = await fetch(baseUrl + "Client/ProcessClientQuery", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    //'Authorization': 'Bearer ' + getSessionToken()
                },
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

    PollForResponse = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
            const res = await fetch(baseUrl + "Client/GetClientQuery", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    //'Authorization': 'Bearer ' + getSessionToken()
                },
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data.isSuccess && data.clientQueryModel) {
                return data;
            }
            else {
                return null;
            }
        } catch (ex) {
            console.log(ex);
        }
    };


}