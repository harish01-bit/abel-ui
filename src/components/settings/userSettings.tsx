import { useNavigate } from "react-router-dom";
import { useSettingsModule } from "../../modules/hooks/useSettingsModule";

export const UserSettings = () => {
    const { userSettings, form, formError, isLoading, userSettingsData } = useSettingsModule();
    const navigate = useNavigate();
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="row justify-content-center">

                            <div className="col-lg-6 login-form-wrapper all-border-radius">
                                <div style={{ padding: 30 }}>
                                    <form className="" onSubmit={form.handleSubmit} noValidate>
                                        {/* <h3>User Settings</h3> */}
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Chat Personlaity:(applied only for new chats)</label>
                                            { <select
                                                id="chatBehaviour"
                                                className="form-control"
                                                name="chatBehaviour"

                                                value={form.values.chatBehaviour}
                                                onChange={form.handleChange}
                                            >

                                                {userSettingsData?.chatBehaviourOptionList?.map((setting: any) => (
                                                    <option key={setting.value} value={setting.value}>
                                                        {setting.text}
                                                    </option>
                                                ))}
                                            </select>}
                                            {form.errors.chatBehaviour && typeof form.errors.chatBehaviour === "string" && (<span className="error-text">{form.errors.chatBehaviour}</span>)}

                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Purge Settings</label>
                                            {<select
                                                id="purgeFrequency"
                                                className="form-control"
                                                name="purgeFrequency"

                                                value={form.values.purgeFrequency}
                                                onChange={form.handleChange}
                                            >

                                                {userSettingsData?.purgeSettingsOptionList?.map((setting: any) => (
                                                    <option key={ 'chat-' +setting.value} value={setting.value}>
                                                        {setting.text}
                                                    </option>
                                                ))}
                                            </select>}
                                            {form.errors.purgeFrequency && typeof form.errors.purgeFrequency === "string" && (<span className="error-text">{form.errors.purgeFrequency}</span>)}

                                        </div>
                                        {formError != "" && (<span className="error-text">{formError}</span>)}
                                        <div className="row">
                                            <div className="col-8">
                                                <button type="submit" className="submit-btn w-100">Save Settings</button>
                                            </div>
                                            <div className="col-4">
                                                <span onClick={() => navigate("/chat")} className="link-text">Back</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end w-100">

                                        </div>
                                        <div className="w-100"
                                            style={{ display: "flex", justifyContent: "center", gap: "10px" }}>




                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}