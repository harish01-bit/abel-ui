import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRegisterUserMutate } from '../../middleware/hooks/useLoginApi';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';


export const useRegisternModule = () => {
    const {

        mutateAsync: register
    } = useRegisterUserMutate();
    const navigate = useNavigate();
    const [formError, setFormError] = useState<string>("")

    const handleLoginClick = () => {
        navigate("/login");
    }

    const validationSchema = Yup.object<any>({

        password: Yup.string()
            .required('Password is required')
            .min(8, ' Password is too short. Min 8 charecters required.'),
        userEmail: Yup.string()
            .required('User Email is required'),
        registerKey: Yup.string()
            .required('Registartion Key is required'),
        firstName: Yup.string()
            .required('Firstname is required'),
        surName: Yup.string()
            .required('Surname is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),


    });
    const form = useFormik<any>({
        initialValues: {
            password: "",
            userEmail: '',
            registerKey: '',
            firstName: '',
            surName: '',
            confirmPassword: ''

        },
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            setFormError("")
            const res = await register(
                {
                    User: {
                        email: values.userEmail,
                        password: values.password,
                        userID:0,
                        roleID: 2,
                        tenantID: 1,
                        firstName: values.firstName,
                        surName: values.surName
                    }, registrationKey: values.registerKey
                })
            if (res?.isSuccess) {
                if (res.error && res.error != "") {
                    setFormError(res.error);
                }
                else {
                    setFormError("Registration Successful!Please Login")
                    resetForm()
                }
            }
            else {
                setFormError("Registration failed. Please Try again!")
            }
        },
    });


    return { form, formError,handleLoginClick };

}