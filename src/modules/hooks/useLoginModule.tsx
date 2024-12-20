import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginMutate } from '../../middleware/hooks/useLoginApi';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../helpers/util.service';
import { useState } from 'react';
import { AuthenticationService } from '../../helpers/authetication.service';

export const useLoginModule = () => {
    const {

        mutateAsync: login
    } = useLoginMutate();
    const navigate = useNavigate();
    const [formError, setFormError] = useState<string>("")


    const handleRegisterLinkClick = () => {
        navigate("/register");
    }
    const handleForgotPasswordLinkClick = () => {
        navigate("/forgotpassword");
    }

    const validationSchema = Yup.object<any>({

        password: Yup.string()
            .required('Password is required'),
        userEmail: Yup.string()
            .required('User Email is required'),


    });

    const form = useFormik<any>({
        initialValues: {
            password: "",
            userEmail: '',

        },
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false,
        validationSchema,
        onSubmit: async (values) => {
            setFormError("")
            const res = await login({
                userEmail: values.userEmail,
                password: values.password
            })
            if (res?.isSuccess) {

                if (res.error == "otp send") {
                    setFormError("unverified");
                }
                else if (res.error == "otp fail") {
                    setFormError("Email Unverified. Error when genrating OTP. Please contact adminisntrator.")
                }
                else {

                    setLocalStorage("user", res.user)
                    setLocalStorage("token", res.token)
                    AuthenticationService.currentUser = res.user;
                    AuthenticationService.isUserLoggedIn = true;
                    navigate("/chat");

                }

            }
            else {
                setFormError("login Failed. Please Try again!")
            }
        },
    });


    return { form, formError, handleRegisterLinkClick, handleForgotPasswordLinkClick,setFormError };

}