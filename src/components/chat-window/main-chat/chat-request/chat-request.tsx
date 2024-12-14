import { Fragment } from "react/jsx-runtime";
type Props = {
    message: string
}
function ChatRequestComponent({ message }: Props) {

    return (
        <Fragment>
            <div className="avtar" />
            <div className="text-wrapper">
                <h4 className="user">
                    User
                </h4>
                <div className="content text-wrapper">
                    <p>
                        {message}
                    </p>

                </div>
            </div>
        </Fragment>

    )
}
export default ChatRequestComponent;