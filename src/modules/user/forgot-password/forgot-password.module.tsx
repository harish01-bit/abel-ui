import { useForgotPasswordModule } from "../../hooks/useForgotPasswordModule";

export const ForgotPasswordModule = () => {
    const { form, formError, handleLoginClick, action } = useForgotPasswordModule();
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="row justify-content-center">

                            <div className="col-lg-6 login-form-wrapper all-border-radius">
                                <form className="login-form" onSubmit={form.handleSubmit} noValidate>
                                    <h3>GENERATE OTP</h3>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="userEmail"
                                        id="userEmail"
                                        value={form.values.userEmail}
                                        onChange={form.handleChange}

                                        placeholder="User Email"
                                    />
                                    {form.errors.userEmail && typeof form.errors.userEmail === "string" && (<span className="error-text">{form.errors.userEmail}</span>)}

                                    {action == "verify" &&
                                        <>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="otp"
                                                id="otp"
                                                value={form.values.otp}
                                                onChange={form.handleChange}

                                                placeholder="OTP"
                                            />
                                            {form.errors.otp && typeof form.errors.otp === "string" && (<span className="error-text">{form.errors.otp}</span>)}
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                value={form.values.password}
                                                onChange={form.handleChange}

                                                placeholder="Password"
                                            />     {form.errors.password && typeof form.errors.password === "string" && (<span className="error-text">{form.errors.password}</span>)}


                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={form.values.confirmPassword}
                                                onChange={form.handleChange}

                                                placeholder="Confirm Password"
                                            />     {form.errors.confirmPassword && typeof form.errors.confirmPassword === "string" && (<span className="error-text">{form.errors.confirmPassword}</span>)}
                                        </>

                                    }

                                    {formError != "" && (<span className="error-text">{formError}</span>)}
                                    <span onClick={handleLoginClick} className="link-text">Back to Login</span>
                                    <div className="col-lg-12 row"
                                        style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

                                        <button type="submit" className="submit-btn w-100">{action == "otp" ? "Generate OTP" : "Reset Password"}</button>


                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}