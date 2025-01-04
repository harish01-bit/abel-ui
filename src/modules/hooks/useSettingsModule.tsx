import { useFormik } from "formik";
import { AuthenticationService } from "../../helpers/authetication.service";
import { useGetUserSettings, useSaveUserSettings } from "../../middleware/hooks/useUserApi";
import { useState } from "react";

export const useSettingsModule = () => {
    const userID = AuthenticationService.currentUser.userID
    const [formError, setFormError] = useState<string>("")
  
    const { data: userSettings, isLoading } = useGetUserSettings({ requestID: userID });
    const {

        mutateAsync: saveUserSettings
    } = useSaveUserSettings(userID);

    const form = useFormik<any>({
        initialValues: {
            chatBehaviour: userSettings?.userSettings?.chatBehaviour,


        },
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false,
        enableReinitialize: true, 
        onSubmit: async (values) => {
            setFormError("")
            const res = await saveUserSettings({
                userID: userID,
                chatBehaviour:parseInt(values.chatBehaviour)
            })
            if (res?.isSuccess) {
                setFormError("Settings Saved Successfully!")

            }
            else {
                setFormError("Error When Saving Settings")
            }
        },
    });
    return { userSettings, isLoading, form ,formError}
}