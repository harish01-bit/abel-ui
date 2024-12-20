import { useVerifyEmail } from "../hooks/useVerifyEmail";


export function VerifyEmailComponent({ Email, handleLoginClick }: any) {
    const { form, formError } = useVerifyEmail(Email);
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 bg-wrapper">
                                <div className="img-wrap">

                                </div>
                            </div>
                            <div className="col-lg-6 login-form-wrapper">
                                <form className="login-form" onSubmit={form.handleSubmit} noValidate>
                                    <h4 style={{ color: "red" }}>
                                        Email Unverified. An OTP has been generated and sent to your email. Please check your inbox and enter the OTP to verify your email and proceed with login.</h4>
                                    <h3>Verify Email</h3>

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

                                    <input
                                        type="text"
                                        className="form-control"
                                        id="otp"
                                        name="otp"
                                        value={form.values.otp}
                                        onChange={form.handleChange}

                                        placeholder="OTP"
                                    />     {form.errors.otp && typeof form.errors.otp === "string" && (<span className="error-text">{form.errors.otp}</span>)}
                                    {formError != "" && (<span className="error-text">{formError}</span>)}
                                    <div className="col-lg-12 row"
                                        style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

                                        <button type="submit" className="submit-btn">Verify Email</button>


                                        <button type="button" onClick={handleLoginClick} className="submit-btn">Login</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
