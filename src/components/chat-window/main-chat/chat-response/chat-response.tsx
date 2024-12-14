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
                <h4 className="user">
                    Abel AI
                </h4>
                <div className="content">
                    <RenderText text={message} />
                </div>
            </div>

        </Fragment>

    )
}
export default ChatResponseComponent;