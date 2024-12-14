import { useLoginModule } from "../hooks/useLoginModule"


export const LoginModule = () => {
    const { form } = useLoginModule();
    return (
        <form onSubmit={form.handleSubmit} noValidate>
            <input
                type="text"
                className="question-input"
                name="userEmail"
                id="userEmail"
                value={form.values.userEmail}
                onChange={form.handleChange}

                placeholder="User Email"
            />
            <br></br>
            <br></br>
            <input
                type="password"
                className="question-input"
                id="password"
                name="password"
                value={form.values.password}
                onChange={form.handleChange}

                placeholder="Password"
            />
               <br></br>
            <button title={"Login"} type="submit" >Login </button>
        </form>
    )
}