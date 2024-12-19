import { useLoginModule } from "../../hooks/useLoginModule";
import ladyImage from '../../../assets/images/login-lady.png';
import facebookIcon from '../../../assets/images/facebook.png';
import googleIcon from '../../../assets/images/google.png';
import bgIcon from '../../../assets/images/login-icon.png';
import './login.scss';

export const LoginModule = () => {
    const { form,formError,handleRegisterLinkClick } = useLoginModule();
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 bg-wrapper">
                                <div className="img-wrap">
                                    <img src={ladyImage}/>
                                    <img src={bgIcon} className="icon-img"/>
                                </div>
                            </div>
                            <div className="col-lg-6 login-form-wrapper">
                                    <form className="login-form"  onSubmit={form.handleSubmit} noValidate>
                                        <h3>LOGIN</h3>
                                        <p>How to i get started lorem ipsum dolor at?</p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="userEmail"
                                            id="userEmail"
                                            value={form.values.userEmail}
                                            onChange={form.handleChange}

                                            placeholder="User Email"
                                        />
                                        {form.errors.userEmail &&  typeof form.errors.userEmail === "string" &&  (<span className="error-text">{form.errors.userEmail}</span>)}
                                    
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={form.values.password}
                                            onChange={form.handleChange}

                                            placeholder="Password"
                                        />     {form.errors.password &&  typeof form.errors.password === "string" &&  (<span className="error-text">{form.errors.password}</span>)}
                                        {formError !="" && (<span className="error-text">{formError}</span>)}
                                        
                                        <button type="submit" className="submit-btn">Login</button>
                                        <div className="lined-text"><span><strong>Login</strong> with Others</span></div>
                                        <div className="social-media-login-button">
                                            <img src={googleIcon}/>
                                            Login with&nbsp;<strong>google</strong>
                                        </div>
                                        <div className="social-media-login-button">
                                            <img src={facebookIcon}/>
                                            Login with&nbsp;<strong>Facebook</strong>
                                        </div>
                                        
                                        {/* <a type="submit" onClick={handleRegisterLinkClick} className="submit-btn">Register</a> */}
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}