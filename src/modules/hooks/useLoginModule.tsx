import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginMutate } from '../../middleware/hooks/useLoginApi';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../helpers/util.service';
import { useEffect } from 'react';
import { AuthenticationService } from '../../helpers/authetication.service';

export const useLoginModule = () => {
    const {
        data: postData,
        isLoading: postLoading,
        mutateAsync: login
    } = useLoginMutate();
    const navigate = useNavigate();




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
            console.log(values)
            const res = await login({
                userEmail: values.userEmail,
                password: values.password
            })
            if (res.isSuccess) {
                setLocalStorage("user", res.user)
                setLocalStorage("token", res.token)
                navigate("/chat");
            }
        },
    });


    return { form };

}