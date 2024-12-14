import { useMutation, useQueryClient } from "react-query";
import { ChatApiService } from "../services/chat-api.service";
import { mutationHelperFun } from "../../helpers/react-query-helper";


export const useSendMessageMutate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.SendMessageRequest(request),
        mutationHelperFun(queryClient, "")
    );
};

export const usePollResponsetate = () => {
    const service = new ChatApiService();
    const queryClient = useQueryClient();
    return useMutation(
        (request: any) =>
            service.PollForResponse(request),
        mutationHelperFun(queryClient, "")
    );
};
