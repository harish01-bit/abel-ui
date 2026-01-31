import { AppConfigUtil } from "../../helpers/app-config-util";
import { AuthenticationService } from "../../helpers/authetication.service";
import { restClient } from "../../helpers/rest-helper.service";

export class LoginApiService {
    AutheticateUser = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
          
            const res = await fetch(baseUrl + "api/User/Authenticate", {
                method: 'post',
                headers:AuthenticationService.getRequestHeaders(),
                body: JSON.stringify(request)
            });
            const data = await res.json();
            console.log("AuthenticateUser response data:", data);
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

    RegistereUser = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
          
            const res = await fetch(baseUrl + "api/User/Register", {
                method: 'post',
                headers:AuthenticationService.getRequestHeaders(),
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

    RefreshToken = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
       
            const res = await restClient(baseUrl + "api/User/RefreshToken", {
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
            console.log(ex)
            return null
        }
    };

    GenerateOTP = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
       
            const res = await restClient(baseUrl + "api/User/GenerateOTP", {
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
            console.log(ex)
            return null
        }
    };

    ResetPassword = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
       
            const res = await restClient(baseUrl + "api/User/ResetPassword", {
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
            console.log(ex)
            return null
        }
    };


    
    VerifyEmail = async (request: any) => {
        try {
            const baseUrl = AppConfigUtil.appconfig.serviceUrl;
       
            const res = await restClient(baseUrl + "api/User/VerifyEmail", {
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
            console.log(ex)
            return null
        }
    };
}