import { useMutation, useQueryClient } from "react-query";
import { ChatApiService } from "../services/chat-api.service";
import { mutationHelperFun } from "../../helpers/react-query-helper";


export const useSendMessageMutate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.sendMessageRequest(request),
        mutationHelperFun(queryClient, "")
    );
};

export const usePollResponsetate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.pollForResponse(request),
        mutationHelperFun(queryClient, "")
    );
};

export const useGetLatestQueryListMutate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.getLatestUserQueryList(request),
        mutationHelperFun(queryClient, "")
    );
    
};

export const useGetLatestQueryMasterListMutate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.getLatestUserQueryMasterList(request),
        mutationHelperFun(queryClient, "")
    );
    
};
export const useGetClientChatListMutate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.getClientChatList(request),
        mutationHelperFun(queryClient, "")
    );
    
};