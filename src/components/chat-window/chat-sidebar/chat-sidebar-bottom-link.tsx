import { MdOutlineHelpOutline, MdHistory, MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";
const SidebarBottomLinks = (props: any) => {
    return (
        <ul className="tyn-aside-foot">
            {/*

<li><Link  to="/settings"><MdOutlineHelpOutline /><span className={`${props.collapseSidebar ? 'collapsed-item' : ''}`}>Help</span></Link></li>
<li><a href="#"><MdHistory /><span className={`${props.collapseSidebar ? 'collapsed-item' : ''}`}>Activity</span></a></li>*/
            }
            <li><Link to="/settings"><MdOutlineSettings /><span className={`${props.collapseSidebar ? 'collapsed-item' : ''}`}>Settings</span></Link></li>
        </ul>
    )
}

export default SidebarBottomLinks;