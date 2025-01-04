import { useMutation, useQuery, useQueryClient } from "react-query";
import { reactQueryConfig } from "../../helpers/react-query.config";
import { UserApiService } from "../services/user-api.service";
import { mutationHelperFun } from "../../helpers/react-query-helper";

const service = new UserApiService();
export const useGetUserSettings = (
    request: any
) => {
    const data = async () => service.GetUserSettings(request);
    return useQuery("user-settings-" + request.requestID, data, reactQueryConfig);
};
export const useSaveUserSettings = (userID: number) => {

    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.SaveUserSettings(request),
        mutationHelperFun(queryClient, "user-settings-" + userID)
    );
};
