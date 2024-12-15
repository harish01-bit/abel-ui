import { AppConfigUtil } from "../../helpers/app-config-util";
import { AuthenticationService } from "../../helpers/authetication.service";
import { restClient } from "../../helpers/rest-helper.service";

export class ChatApiService {
    sendMessageRequest = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
            
            const res = await restClient(baseUrl + "Client/ProcessClientQuery", {
                method: 'post',
              
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
           
            return null
        }
    };

    pollForResponse = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
            const res = await restClient(baseUrl + "Client/GetClientQuery", {
                method: 'post',
                
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data?.isSuccess && data?.clientQueryModel) {
                return data;
            }
            else {
                return null;
            }
        } catch (ex) {
           
        }
    };
    
    getLatestUserQueryList=async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
            const res = await restClient(baseUrl + "Client/GetLatestUserQueryList", {
                method: 'post',
                
                body: JSON.stringify(request)
            });
            const data = await res.json();
            if (data?.isSuccess ) {
                return data;
            }
            else {
                return null;
            }
        } catch (ex) {
            
        }
    };

}