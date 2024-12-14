
import { AppConfigUtil } from '../helpers/app-config-util';
import { useAppconfig } from '../helpers/app-config.service';
import ChatWindow from '../modules/chat-window/chat-window';

const ChatPage = () => {
    const { data, isLoading } = useAppconfig();
    console.log(data)
    AppConfigUtil.setAppconfig(data);
    return (<ChatWindow/>)
}
export default ChatPage;
