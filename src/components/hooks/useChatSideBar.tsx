import { useEffect, useState } from "react";
import { useGetLatestQueryMasterListMutate } from "../../middleware/hooks/useChatApi";


export const useChatSideBar = ({ newChat, handleCollapseSidebar, currentUser }: any) => {

    const [querymasterList, setQueryMasterList] = useState<Array<any>>([]);
    const {
        data: queyListData,
        isLoading: isqueryListLoading,
        mutateAsync: getLatestUserQueryMasterList
    } = useGetLatestQueryMasterListMutate();

    const handleNewChat = () => {

        newChat();
    }
    const handlerToggleSideBar = () => {
        handleCollapseSidebar();
    }

    useEffect(() => {
        getLatestUserQueryMasterList({
            userID: currentUser?.userID,
            tenantID: currentUser.tenantID
        }).then(res => {

            if (res?.isSuccess) {

                setQueryMasterList([...res.queryMasterList])
            }
            else {

            }
        })
    }, [currentUser?.userID, getLatestUserQueryMasterList])
    return { querymasterList,handlerToggleSideBar,handleNewChat  }

}
