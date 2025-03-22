import { useNavigate } from "react-router-dom";
import { useSettingsModule } from "../../hooks/useSettingsModule";
import { UserSettings } from "../../../components/settings/userSettings";
import { GeneralSettings } from "../../../components/settings/general";
import { PersonalizeSettings } from "../../../components/settings/personalize";
import './settings.scss';
import { useState } from "react";

export const SettingsModule = () => {
    const { userSettings, form, formError, isLoading, userSettingsData } = useSettingsModule()
    const navigate = useNavigate();
    const [activeTab,setActiveTab] = useState('userSettings');
    const items = [
        {
            id: "userSettings",
            name: "User",
        },
        {
            id: "general",
            name: "General",
        },
        {
            id: "personalize",
            name: "Personalize",
        },
        // {
        //     id: "terms",
        //     name: "Terms",
        // },
        // {
        //     id: "privacy",
        //     name: "Privacy",
        // },
    ]
    const chatBehaviourSettings = [
        {
            id: 1, type: "Pastor"
        },
        {
            id: 2, type: "Intelligent Book"
        },
    ]
    const tabClickHandler = (val:string) => {
        if(val === 'terms'){
            navigate("/terms");
        }
        else if(val === 'privacy'){
            navigate("/privacy");
        }else{
            setActiveTab(val)
        }
    }
    return (
        <div className="settings-wrapper">
        <div className="inner-wrapper">
            <ul className="nav">
                {items.map(el => {
                    return (
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === el.id ? 'active' : ''}`} aria-current="page" onClick={() => tabClickHandler(el.id)}>{el.name}</a>
                        </li>        
                    )
                })}
            </ul>
            {
                isLoading ? <></> : 
                activeTab === 'userSettings' ? <UserSettings/> : 
                activeTab === 'general' ? <GeneralSettings/> : 
                activeTab === 'personalize' ? <PersonalizeSettings/> : 
                <></>
            }
        </div>
       
        </div>
    )
}