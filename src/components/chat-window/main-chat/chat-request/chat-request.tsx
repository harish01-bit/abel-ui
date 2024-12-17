import { Fragment } from "react/jsx-runtime";
import UserIConComponent from "../../../ui-component/user-icon/user-icon";
type Props = {
    message: string
}
function ChatRequestComponent({ message }: Props) {


    return (
        <div className="group user-input-group">
            <UserIConComponent />
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