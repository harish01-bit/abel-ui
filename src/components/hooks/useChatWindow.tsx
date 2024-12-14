import { use, useState } from "react";
import { ChatApiService } from "../../middleware/services/chat-api.service";
import { usePollResponsetate, useSendMessageMutate } from "../../middleware/hooks/useChatApi";

export const useChatWindow = () => {

    const [messages, setMessages] = useState<Array<any>>([]);
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const service = new ChatApiService();
    const [querMasterID, setQueryMasterID] = useState<number>(0);
    const pollingInterval = 1000; // 1 second
    const pollingDuration = 5 * 60 * 1000; // 5 minutes
    let elapsedTime = 0;
    let pollingCompleted = false;
    let intervalId: any;
    const {
        data: postData,
        isLoading: postLoading,
        mutateAsync: sendMessage
    } = useSendMessageMutate();

    const {
        data,
        isLoading,
        mutateAsync: pollResponse
    } = usePollResponsetate();
    const appendMessage = (message: string, sender: string) => {
        

        setMessages((prevMessages) => [{ sender: sender, text: message }, ...prevMessages]);
   
    }
    const handleSend = async (event:any) => {
        event.preventDefault();
        if (input.trim() === "") return;
        appendMessage(input, "user");
        setInput("");
        setIsProcessing(true);
        const sendMessageResponse = await sendMessage({
            tenantID: 1,
            userID: 1,
            queryMasterID: querMasterID ,
            query: input,
            title: "Able Message",
            fileString: null
        })
      
        if (sendMessageResponse?.isSuccess) {
            setQueryMasterID(sendMessageResponse.clientQueryMasterID)
            intervalId = setInterval(async () => {
                PollMessageResponse(sendMessageResponse)
            }, pollingInterval);
        }
        else {
            appendMessage("Sorry, something went wrong!", "ai")
            setIsProcessing(false);
        }

    };
    const PollMessageResponse = async (sendMessageResponse: any) => {
        elapsedTime += pollingInterval;
        const { clientQueryModel } = sendMessageResponse;
        const res = await pollResponse({
            tenantID: 1,
            userID: 1,
            queryMasterID: clientQueryModel.clientQueryMasterID, // 0 for new chat
            queryID: clientQueryModel.clientQueryID,

        })
        console.log(res)
        if (res?.isSuccess) {
            if (res?.clientQueryModel?.processStatus == 2) {
                clearInterval(intervalId);
                appendMessage(res?.clientQueryModel?.response, "ai");
                setIsProcessing(false);
            }

        }
        else {
            clearInterval(intervalId);
            appendMessage("Sorry, something went wrong!", "ai")
            setIsProcessing(false);

        }
        if (elapsedTime >= pollingDuration) {
            clearInterval(intervalId);
            appendMessage("No Response", "ai")
            setIsProcessing(false);
        }

    }
    return { messages, setMessages, handleSend, input, setInput,isProcessing }
}