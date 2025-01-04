import { useSettingsModule } from "../../hooks/useSettingsModule"

export const SettingsModule = () => {
    const { userSettings, form, formError, isLoading } = useSettingsModule()
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

                            <div className="col-lg-6 login-form-wrapper all-border-radius">
                                <div className="login-form-inner-wrapper">
                                    <form className="login-form" onSubmit={form.handleSubmit} noValidate>
                                        <h3>User Settings</h3>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Chat Personlaity:</label>
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

                                        <div className="w-100"
                                            style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

                                            <button type="submit" className="submit-btn w-100">Save Settings</button>


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