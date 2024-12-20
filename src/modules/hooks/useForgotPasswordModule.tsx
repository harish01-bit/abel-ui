import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGenerateOTPMutate, useRegisterUserMutate, useResetPasswordMutate } from '../../middleware/hooks/useLoginApi';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';


export const useForgotPasswordModule = () => {
    const [action, setAction] = useState<string>("otp");
    const {

        mutateAsync: generateOtp
    } = useGenerateOTPMutate();
    const {

        mutateAsync: resetPassword
    } = useResetPasswordMutate();
    const navigate = useNavigate();
    const [formError, setFormError] = useState<string>("")

    const handleLoginClick = () => {
        navigate("/login");
    }

    const validationSchema = Yup.object<any>({
        otp: action == "verify" ? Yup.string()
            .required('User Email is required') : Yup.string(),
        userEmail: Yup.string()
            .required('User Email is required'),
        confirmPassword: action == "verify" ? Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required') : Yup.string(),
        password: action == "verify" ? Yup.string()
            .required('Password is required')
            .min(8, ' Password is too short. Min 8 charecters required.') : Yup.string(),

    });
    const form = useFormik<any>({
        initialValues: {

            userEmail: '',
            password: "",
            confirmPassword: '',
            otp: "",
        },
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setFormError("")
            if (action == "otp") {
                const res = await generateOtp(

                    { email: values.userEmail }
                )
                if (res?.isSuccess) {
                    if (res.error == "") {
                        setAction("verify");
                        setFormError("An OTP has been sent to your email. Please check your inbox and enter the OTP to reset your password.")
                    }


                    else
                        setFormError(res.error);
                }
                else {
                    setFormError("OTP generation Failed. Please Try again!")
                }
            }
            else if (action == "verify") {
                const res = await resetPassword(

                    {
                        email: values.userEmail,
                        password: values.password,
                        otp:values.otp
                    }
                )
                if (res?.isSuccess) {
                    if (res.error == "reset")
                        setFormError("Password Reset Successful. Please Login")
                    else
                        setFormError(res.error);
                }
                else {
                    setFormError(res.error)
                }
            }
        },
    });


    return { form, formError, handleLoginClick, action };

}