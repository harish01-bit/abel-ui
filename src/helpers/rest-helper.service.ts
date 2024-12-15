import { AuthenticationService } from "./authetication.service";
import { clearUserDetails } from "./util.service";



export const restClient = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    try {
        // Check if the URL is excluded
        const url = typeof input === "string" ? input : input.url;
     

        
            // Add headers or other modifications for non-excluded requests
            init = init || {};
            init.headers = {
                ...init.headers,
             ...AuthenticationService.getRequestHeaders()
            };
        

        const response = await fetch(input, init);


        if ( response.status === 401) {
            console.log("error")
            clearUserDetails();
           window.location.href = "/login";
        }

        return response;
    } catch (error: any) {
        
        if (error.status === 401) {
           console.log(error)
            clearUserDetails();
            window.location.href = "/login";
            throw error;
        }
        else {
            console.error("An error occurred during the fetch operation:", error);
            throw error;
        }

    }
};
