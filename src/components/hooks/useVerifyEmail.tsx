import { useEffect, useState } from "react";

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useVerifyEmailMutate } from "../../middleware/hooks/useLoginApi";
export const useVerifyEmail = (email:string) => {

    const {

        mutateAsync: verifyEmail
    } = useVerifyEmailMutate();
    
    const [formError, setFormError] = useState<string>("")


  

    const validationSchema = Yup.object<any>({

        otp: Yup.string()
            .required('OTP is required'),
        userEmail: Yup.string()
            .required('User Email is required'),


    });
   
    const form = useFormik<any>({
        initialValues: {
            otp: "",
            userEmail: email,

        },
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false,
        validationSchema,
        onSubmit: async (values) => {
            setFormError("")
            const res = await verifyEmail({
                email: values.userEmail,
                otp: values.otp
            })
            if (res?.isSuccess) {
                setFormError("Email Verification successful!")  
            }
            else {
                setFormError("login Failed. Please Try again!")
            }
        },
    });


    return { form, formError };


}
