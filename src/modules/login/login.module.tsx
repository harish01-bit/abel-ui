import { useLoginModule } from "../hooks/useLoginModule"


export const LoginModule = () => {
    const { form,formError } = useLoginModule();
    return (
        <form className="login-form"  onSubmit={form.handleSubmit} noValidate>
             <h3>Abel</h3>
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
        </form>
    )
}