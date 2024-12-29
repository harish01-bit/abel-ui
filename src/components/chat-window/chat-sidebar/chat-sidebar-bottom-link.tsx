import { MdOutlineHelpOutline, MdHistory, MdOutlineSettings } from "react-icons/md";
const SidebarBottomLinks = (props:any) => {
    return (
        <ul className="tyn-aside-foot">
            <li><a href="#"><MdOutlineHelpOutline /><span className={`${props.collapseSidebar ? 'collapsed-item' : ''}`}>Help</span></a></li>
            <li><a href="#"><MdHistory /><span className={`${props.collapseSidebar ? 'collapsed-item' : ''}`}>Activity</span></a></li>
            <li><a href="#"><MdOutlineSettings /><span className={`${props.collapseSidebar ? 'collapsed-item' : ''}`}>Settings</span></a></li>
        </ul>
    )
}

export default SidebarBottomLinks;