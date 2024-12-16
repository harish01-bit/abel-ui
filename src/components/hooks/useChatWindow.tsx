import { use, useEffect, useRef, useState } from "react";
import { ChatApiService } from "../../middleware/services/chat-api.service";
import { useGetClientChatListMutate, useGetLatestQueryListMutate, usePollResponsetate, useSendMessageMutate } from "../../middleware/hooks/useChatApi";
import { AuthenticationService } from "../../helpers/authetication.service";

export const useChatWindow = ({querMasterID,setQueryMasterID,currentUser}:any) => {

    const [messages, setMessages] = useState<Array<any>>([]);
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const service = new ChatApiService();
   
    const pollingInterval = 1000; // 1 second
    const pollingDuration = 5 * 60 * 1000; // 5 minutes

    let elapsedTime = 0;
    let pollingCompleted = false;
    let intervalId: any;

    const isFetched = useRef(false);
    const {
       
        mutateAsync: sendMessage
    } = useSendMessageMutate();

    const {
        mutateAsync: pollResponse
    } = usePollResponsetate();


    const {
        mutateAsync: getLatestUserQueryList
    } = useGetLatestQueryListMutate();

    const {
        mutateAsync: getClientChatList
    } = useGetClientChatListMutate();

    const  getClientChatListWithMasterID = ()=>{
        getClientChatList({
            queryMasterID: querMasterID,
            userID: currentUser.userID,
            tenantID: currentUser.tenantID
        }).then(res => {
            if (res?.isSuccess) {
                if (res.clientQueryList?.length > 0) {
                    res.clientQueryList?.forEach((q: any) => {
                        appendMessage(q.request, "user")
                        appendMessage(q.response, "ai")

                    })
                    
                }
                setIsProcessing(false);
            }
            else {
                appendMessage("Sorry, something went wrong!", "ai")
                setIsProcessing(true);
            }
        })
   }
 
    useEffect(() => {
        if (currentUser?.userID && !isFetched.current) {
            isFetched.current = true;
            setIsProcessing(true);
            getLatestUserQueryList({
                userID: currentUser.userID,
                tenantID: currentUser.tenantID
            }).then(res => {

                if (res?.isSuccess) {
                    if (res.clientQueryList?.length > 0) {
                        res.clientQueryList?.forEach((q: any) => {
                            appendMessage(q.request, "user")
                            appendMessage(q.response, "ai")

                        })
                        setQueryMasterID(res.clientQueryList[0].clientQueryMasterID)
                    }
                    setIsProcessing(false);
                }
                else {
                    appendMessage("Sorry, something went wrong!", "ai")
                    setIsProcessing(true);
                }
            })
        }

    }, [currentUser?.userID, getLatestUserQueryList])
    useEffect(()=>{
        if(querMasterID==0){
            setMessages([])
        }
        else{
            setMessages([])
            getClientChatListWithMasterID();
        }

    },[querMasterID])
    const appendMessage = (message: string, sender: string) => {


        setMessages((prevMessages) => [{ sender: sender, text: message }, ...prevMessages]);

    }
    const handleSend = async (event: any) => {
        event.preventDefault();
        if (input.trim() === "") return;
        appendMessage(input, "user");
        setInput("");
        setIsProcessing(true);
        const sendMessageResponse = await sendMessage({
            tenantID: 1,
            userID: 1,
            queryMasterID: querMasterID,
            query: input,
            title: "Able Message",
            fileString: null
        })

        if (sendMessageResponse?.isSuccess) {
            if(querMasterID==0)
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
            userID: currentUser.userID,
            tenantID: currentUser.tenantID,
            queryMasterID: clientQueryModel.clientQueryMasterID, // 0 for new chat
            queryID: clientQueryModel.clientQueryID,

        })

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
    return { messages, setMessages, handleSend, input, setInput, isProcessing }
}