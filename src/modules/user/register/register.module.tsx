import { useLoginModule } from "../../hooks/useLoginModule"
import { useRegisternModule } from "../../hooks/useRegisterModule";


export const RegisterModule = () => {
    const { form, formError, handleLoginClick } = useRegisternModule();
    return (
        <form className="login-form" onSubmit={form.handleSubmit} noValidate>
            <h3>Sign Up</h3>
            <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
                value={form.values.firstName}
                onChange={form.handleChange}

                placeholder="First Name"
            />
            {form.errors.firstName && typeof form.errors.firstName === "string" && (<span className="error-text">{form.errors.firstName}</span>)}


            <input
                type="text"
                className="form-control"
                name="surName"
                id="surName"
                value={form.values.surName}
                onChange={form.handleChange}

                placeholder="Surname"
            />
            {form.errors.surName && typeof form.errors.surName === "string" && (<span className="error-text">{form.errors.surName}</span>)}


            <input
                type="text"
                className="form-control"
                name="registerKey"
                id="registerKey"
                value={form.values.registerKey}
                onChange={form.handleChange}

                placeholder="Registration Key"
            />
            {form.errors.registerKey && typeof form.errors.registerKey === "string" && (<span className="error-text">{form.errors.registerKey}</span>)}

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



            {formError != "" && (<span className="error-text">{formError}</span>)}

            <button type="submit" className="submit-btn">Register</button>
            <a type="submit" onClick={handleLoginClick} className="submit-btn">Login</a>
        </form>
    )
}