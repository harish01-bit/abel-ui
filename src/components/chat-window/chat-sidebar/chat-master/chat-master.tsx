import { dateFormatter } from "../../../../helpers/date-util.service";

export function ChatMasterComponent({ queryMaster, setQueryMasterID }: any) {

    const handleClick = () => {
        setQueryMasterID(queryMaster.clientQueryMasterID)
    }
    return (<li>
        <a
            className="btn btn-light btn-md "
            onClick={handleClick }

        >
            <span>

                {queryMaster.context.substr(0, 25)}...


            </span>


        </a>
    </li>)
}