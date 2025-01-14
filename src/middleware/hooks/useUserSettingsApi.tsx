import { useMutation, useQuery, useQueryClient } from "react-query";
import { reactQueryConfig } from "../../helpers/react-query.config";

import { mutationHelperFun } from "../../helpers/react-query-helper";
import { UserSettingsApiService } from "../services/user-settings.api.service";

const service = new UserSettingsApiService();
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
export const useGetUseSettingsDataList = () => {

    const data = async () => service.GetUserSettingsDataList();
    return useQuery("user-settings-data" , data, reactQueryConfig);
};
