import { use, useEffect, useRef, useState } from "react";
import { ChatApiService } from "../../middleware/services/chat-api.service";
import { useGetClientChatListMutate, useGetLatestQueryListMutate, usePollResponsetate, useSendMessageMutate } from "../../middleware/hooks/useChatApi";
import { AuthenticationService } from "../../helpers/authetication.service";
import { HubConnectionBuilder, HubConnection, HttpTransportType } from "@microsoft/signalr";
import { AppConfigUtil } from "../../helpers/app-config-util";
export const useChatWindow = ({ querMasterID, setQueryMasterID, currentUser, queryType }: any) => {

    const [messages, setMessages] = useState<Array<any>>([]);
    const [curQueryID, setCurQueryID] = useState<number>(0);
    const [chatResponse, setChatResponse] = useState<any>(null);
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const connection = useRef<HubConnection | null>(null);
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

  /*  const {
        mutateAsync: pollResponse
    } = usePollResponsetate();*/
    useEffect(() => {
        connectToSignalR();
        return () => {
            if (connection.current) {
                connection.current.stop().catch((err) => {
                    console.error("Error while stopping SignalR connection:", err);
                });
            }
        };
    }, [])

    const connectToSignalR = () => {
        connection.current = new HubConnectionBuilder()
            .withUrl(AppConfigUtil.appconfig.serviceUrl+"chatresponse",{  transport: HttpTransportType.WebSockets | HttpTransportType.ServerSentEvents | HttpTransportType.LongPolling})
            
            .build();
        connection.current
            .start()
            .then(() => {
                connection.current?.invoke("JoinGroup", queryType == 1 ? "Text" : "Audio"); 

            })
            .catch((err) => {
            });
        connection.current.on("ReceiveResponse", (requestID: number, clientQueryModel: any) => {
            setChatResponse(clientQueryModel)
        });
    };
    useEffect(() => {
       
        if (curQueryID == chatResponse?.clientQueryID) {

            appendMessage(chatResponse?.response, "ai");

            setIsProcessing(false);
        }
    }, [chatResponse, curQueryID]);

    const {
        mutateAsync: getClientChatList
    } = useGetClientChatListMutate();

    const getClientChatListWithMasterID = () => {

        if (messages.length > 1)
            setMessages([])
        getClientChatList({
            queryMasterID: querMasterID,
            userID: currentUser.userID,
            tenantID: currentUser.tenantID,
            queryType: queryType
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
        if (querMasterID == 0) {
            setMessages([])
        }
        else {

            getClientChatListWithMasterID();
        }

    }, [querMasterID])
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
            tenantID: currentUser?.tenantID,
            userID: currentUser?.userID,
            queryMasterID: querMasterID,
            query: input,
            title: "Able Message",

            queryType: queryType
        })

        if (sendMessageResponse?.isSuccess) {
            if (querMasterID == 0) {
                setQueryMasterID(sendMessageResponse.clientQueryMasterID)

            }

            setCurQueryID(sendMessageResponse?.clientQueryModel?.clientQueryID)
            /*intervalId = setInterval(async () => {
                PollMessageResponse(sendMessageResponse)
            }, pollingInterval);*/
        }
        else {
            appendMessage("Sorry, something went wrong!", "ai")
            setIsProcessing(false);
        }

    };
   /* const PollMessageResponse = async (sendMessageResponse: any) => {
        elapsedTime += pollingInterval;
        const { clientQueryModel } = sendMessageResponse;
        const res = await pollResponse({
            userID: currentUser.userID,
            tenantID: currentUser.tenantID,
            queryMasterID: clientQueryModel.clientQueryMasterID, // 0 for new chat
            queryID: clientQueryModel.clientQueryID,
            queryType: queryType

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

    }*/
    return { messages, setMessages, handleSend, input, setInput, isProcessing }
}