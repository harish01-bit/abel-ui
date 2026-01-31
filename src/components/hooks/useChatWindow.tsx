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

    const pollingInterval = 100; // 100 millisecond
    const pollingDuration = 60000; // 5 minutes

    let elapsedTime = 0;
    let pollingCompleted = false;
    let intervalId: any;

    const isFetched = useRef(false);
    const {

        mutateAsync: sendMessage
    } = useSendMessageMutate();


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
            .withUrl(AppConfigUtil.appconfig.serviceUrl + "chatresponse", { transport: HttpTransportType.WebSockets | HttpTransportType.ServerSentEvents | HttpTransportType.LongPolling })

            .build();
        connection.current
            .start()
            .then(() => {
                connection.current?.invoke("JoinGroup", queryType === 1 ? "Text" : "Audio");

            })
            .catch((err) => {
            });
        connection.current.on("ReceiveResponse", (requestID: number, clientQueryModel: any, isCompleted: boolean) => {
            clientQueryModel["isCompleted"] = isCompleted
            setChatResponse(clientQueryModel)
        });
    };
    // console.log("chatResponse:", chatResponse);
    // console.log("curQueryID:", curQueryID);
    useEffect(() => {

        if (curQueryID == chatResponse?.clientQueryID) {

                appendMessage(chatResponse?.response, "ai", chatResponse?.isCompleted);
                if (chatResponse.isCompleted)
                    setIsProcessing(false);
        }
    }, [chatResponse, curQueryID]);
    // console.log("chatResponse:", chatResponse);
    // console.log("curQueryID:", curQueryID);
    // useEffect(() => {
    // if (curQueryID === chatResponse?.clientQueryID) {
    //     console.log("Processing chatResponse:", chatResponse.processStatus);
    //     if (chatResponse.processStatus === 4) {
    //     appendMessage(chatResponse?.response, "ai", chatResponse?.isCompleted);

    //     if (chatResponse?.isCompleted) setIsProcessing(false);
    //     } else if (chatResponse.processStatus === 5) {
    //     appendMessage("We cannot process this request now", "ai", true);
    //     setIsProcessing(false);
    //     }
    // }
    // }, [chatResponse, curQueryID]);

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

        if (querMasterID === 0) {
            setIsProcessing(false)
            setMessages([])
        }
        else {

            if (curQueryID === 0)
                getClientChatListWithMasterID();
        }

    }, [querMasterID])

    const appendMessage = (message: string, sender: string, isCompleted: boolean = true) => {
        if (sender === "user") {
            // Always append user message at the start
            setMessages((prevMessages) => [{ sender: sender, text: message }, ...prevMessages]);
        } else if (sender === "ai") {

            setMessages((prevMessages) => {

                // Check if the last message is from 'ai'
                if (prevMessages.length > 0 && prevMessages[0].sender === "ai") {
                    const updatedMessages = [...prevMessages];
                    if (!isCompleted)
                        updatedMessages[0].text += ` ${message}`;
                    else
                        updatedMessages[0].text = ` ${message}`;
                    return updatedMessages;
                } else {

                    return [{ sender: sender, text: message }, ...prevMessages]

                }

            });
        }
    };


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
            title: "Abel Message",

            queryType: queryType
        })

        if (sendMessageResponse?.isSuccess) {
            if (querMasterID === 0) {
                setQueryMasterID(sendMessageResponse?.clientQueryModel?.clientQueryMasterID)

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

    return { messages, setMessages, handleSend, input, setInput, isProcessing }
}