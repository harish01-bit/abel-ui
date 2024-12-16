import { Fragment } from "react/jsx-runtime";
import RenderText from "../../../ui-component/render-text/render-text";

type Props = {
    message: string
}

function ChatResponseComponent({ message }: Props) {
    return (
        <Fragment>
            <div className="avtar" />
            <div className="text-wrapper">
                <img src="/letter-a.gif" className="a-gif"/>
                <div className="content">
                    <RenderText text={message} />
                </div>
            </div>

        </Fragment>

    )
}
export default ChatResponseComponent;