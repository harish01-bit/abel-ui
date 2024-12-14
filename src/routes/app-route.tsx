import { useRoutes } from "react-router-dom";
import ChatPage from "../pages/chat/chat";
import React, { useState } from 'react';
import { LoginPage } from "../pages/login/login";


function AppRoute() {
    return useRoutes([
        {
            path: '/login',
            index:true,
            element: <LoginPage />,
        },
        {
            path: '/chat',
            element: <ChatPage />,
        },
    ])
}
export default AppRoute;