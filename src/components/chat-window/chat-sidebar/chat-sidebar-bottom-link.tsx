import { MdOutlineHelpOutline, MdHistory, MdOutlineSettings } from "react-icons/md";
const SidebarBottomLinks = (props:any) => {
    return (
        <ul className="tyn-aside-foot">
            <li><a href="#"><MdOutlineHelpOutline /><span>Help</span></a></li>
            <li><a href="#"><MdHistory /><span>Activity</span></a></li>
            <li><a href="#"><MdOutlineSettings /><span>Settings</span></a></li>
        </ul>
    )
}

export default SidebarBottomLinks;