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
export const useRegisterUserMutate = () => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.RegistereUser(request),
        mutationHelperFun(queryClient, "")
    );
};
export const useGenerateOTPMutate = () => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.GenerateOTP(request),
        mutationHelperFun(queryClient, "")
    );
};


export const useResetPasswordMutate = () => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.ResetPassword(request),
        mutationHelperFun(queryClient, "")
    );
};


export const useVerifyEmailMutate = () => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.VerifyEmail(request),
        mutationHelperFun(queryClient, "")
    );
};
