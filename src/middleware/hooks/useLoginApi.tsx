import { useMutation, useQueryClient } from "react-query";

import { mutationHelperFun } from "../../helpers/react-query-helper";
import { LoginApiService } from "../services/login-api.servic";

const service = new LoginApiService();
export const useLoginMutate = () => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.AutheticateUser(request),
        mutationHelperFun(queryClient, "")
    );
};

export const useRefreshToken = () => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.RefreshToken(request),
        mutationHelperFun(queryClient, "")
    );
};
