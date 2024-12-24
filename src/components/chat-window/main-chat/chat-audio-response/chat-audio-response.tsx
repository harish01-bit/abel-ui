import { Fragment } from "react/jsx-runtime";
import RenderText from "../../../ui-component/render-text/render-text";
import AudioPlayerComponent from "../../../ui-component/audio-player/audio-player";

type Props = {
    message: string
}

function ChatAudioResponseComponent({ message }: Props) {
    return (
        <Fragment >
            <div className="avtar" />
            <div className="text-wrapper">
                <img src="/letter-a.gif" className="a-gif"/>
                <div className="content  text-wrapper">
                   <AudioPlayerComponent base64Audio={message}/>
                </div>
            </div>

        </Fragment>

    )
}
export default ChatAudioResponseComponent;