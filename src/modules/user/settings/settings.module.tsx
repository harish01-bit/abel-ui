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
    const [activeTab,setActiveTab] = useState('userSettings')
    const chatBehaviourSettings = [
        {
            id: 1, type: "Pastor"
        },
        {
            id: 2, type: "Intelligent Book"
        },
    ]
    const tabClickHandler = (val:string) => {
        setActiveTab(val)
    }
    return (
        <div className="settings-wrapper">
        <div className="inner-wrapper">
            <ul className="nav">
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'userSettings' ? 'active' : ''}`} aria-current="page" href="#" onClick={() => tabClickHandler('userSettings')}>User</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'general' ? 'active' : ''}`} href="#" onClick={() => tabClickHandler('general')}>General</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${activeTab === 'personalize' ? 'active' : ''}`} href="#" onClick={() => tabClickHandler('personalize')}>Personalize</a>
                </li>
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