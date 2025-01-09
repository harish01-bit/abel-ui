import { useNavigate } from "react-router-dom";
import { useSettingsModule } from "../../hooks/useSettingsModule"

export const SettingsModule = () => {
    const { userSettings, form, formError, isLoading } = useSettingsModule()
    const navigate = useNavigate();
    const chatBehaviourSettings = [{
        id: 1, type: "Pastor"
    },
    {
        id: 2, type: "Intelligent Book"
    },
    ]
   
    return (
        !isLoading && userSettings ? <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="row justify-content-center">

                            <div  className="col-lg-6 login-form-wrapper all-border-radius">
                                <div style={{padding:30}}>
                                    <form className="" onSubmit={form.handleSubmit} noValidate>
                                        <h3>User Settings</h3>
                                        <div className="col-md-12 mb-3">
                                            <label className="form-label">Chat Personlaity:(applied only for new chats)</label>
                                            <select
                                                id="chatBehaviour"
                                                className="form-control"
                                                name="chatBehaviour"

                                                value={form.values.chatBehaviour}
                                                onChange={form.handleChange}
                                            >

                                                {chatBehaviourSettings.map((setting) => (
                                                    <option key={setting.id} value={setting.id}>
                                                        {setting.type}
                                                    </option>
                                                ))}
                                            </select>
                                            {form.errors.chatBehaviour && typeof form.errors.chatBehaviour === "string" && (<span className="error-text">{form.errors.chatBehaviour}</span>)}

                                        </div>
                                        {formError != "" && (<span className="error-text">{formError}</span>)}
                                        <div className="row">
                                            <div className="col-8">
                                            <button type="submit" className="submit-btn w-100">Save Settings</button>
                                            </div>
                                            <div className="col-4">
                                            <span onClick={()=>navigate("/chat")}  className="link-text">Back</span>
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
        :<></>
    )
}