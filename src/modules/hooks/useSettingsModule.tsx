import { useFormik } from "formik";
import { AuthenticationService } from "../../helpers/authetication.service";

import { useState } from "react";
import { useGetUserSettings, useGetUseSettingsDataList, useSaveUserSettings } from "../../middleware/hooks/useUserSettingsApi";

export const useSettingsModule = () => {
    const userID = AuthenticationService.currentUser.userID
    const [formError, setFormError] = useState<string>("")
  
    const { data: userSettings, isLoading } = useGetUserSettings({ requestID: userID });
    const { data: userSettingsData, isLoading:isisUserSettingsLoaded } = useGetUseSettingsDataList();
    const {

        mutateAsync: saveUserSettings
    } = useSaveUserSettings(userID);

    const form = useFormik<any>({
        initialValues: {
            chatBehaviour: userSettings?.userSettings?.chatBehaviour,
            purgeFrequency: userSettings?.userSettings?.purgeFrequency

        },
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false,
        enableReinitialize: true, 
        onSubmit: async (values) => {
            setFormError("")
            const res = await saveUserSettings({
                userID: userID,
                chatBehaviour:parseInt(values.chatBehaviour),
                purgeFrequency:parseInt(values.purgeFrequency)
            })
            if (res?.isSuccess) {
                setFormError("Settings Saved Successfully!")

            }
            else {
                setFormError("Error When Saving Settings")
            }
        },
    });
    return { userSettings, isLoading, form ,formError,userSettingsData,isisUserSettingsLoaded}
}