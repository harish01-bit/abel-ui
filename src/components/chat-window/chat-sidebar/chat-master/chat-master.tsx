import { dateFormatter } from "../../../../helpers/date-util.service";
import { MdOutlineNote } from "react-icons/md";


export function ChatMasterComponent({ queryMaster, setQueryMasterID,querMasterID }: any) {
  
    const handleClick = () => {
        setQueryMasterID(queryMaster.clientQueryMasterID)
    }
    return (<li className={`${queryMaster.clientQueryMasterID === querMasterID ? 'active' : ''}`}>
        <a
            className="btn btn-md "
            onClick={handleClick }

        >
            <MdOutlineNote/>
            <span>
                {queryMaster.context.substr(0, 25)}...
            </span>


        </a>
    </li>)
}