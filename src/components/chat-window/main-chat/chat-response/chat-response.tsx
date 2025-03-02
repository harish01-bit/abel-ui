import { Fragment } from "react/jsx-runtime";
import RenderText from "../../../ui-component/render-text/render-text";
import { PiSpeakerHighBold } from "react-icons/pi";

type Props = {
    message: string
}

function ChatResponseComponent({ message }: Props) {
    const handleSpeak = () => {
        const msg = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(msg);
      };
    return (
        <Fragment >
            <div className="avtar" />
            <div className="text-wrapper">
                <img src="/letter-a.gif" className="a-gif"/>
                <div className="content  text-wrapper">
                    <RenderText text={message} />
                </div>
                <div onClick={handleSpeak} style={{cursor:"pointer"}}>
                <PiSpeakerHighBold className="absolute bottom-2 right-2 w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-110" />
           </div>
            </div>

        </Fragment>

    )
}
export default ChatResponseComponent;