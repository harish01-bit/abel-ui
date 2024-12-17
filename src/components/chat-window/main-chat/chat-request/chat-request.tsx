import { Fragment } from "react/jsx-runtime";
type Props = {
    message: string
}
function ChatRequestComponent({ message }: Props) {

    return (
        <div className="group user-input-group">
            <div className="avtar">M</div>
            <div className="text-wrapper">
                
                
                <div className="content text-wrapper">
                    <p>
                        {message}
                    </p>

                </div>
            </div>
        </div>

    )
}
export default ChatRequestComponent;