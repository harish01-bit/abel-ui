import { useRoutes } from "react-router-dom";
import ChatPage from "../pages/chat";
import React, { useState } from 'react';


function AppRoute()  {
    return useRoutes([
        {
            path: '/',
            element: <ChatPage/>,
          },

    ])
}
export default AppRoute ;