import { useRoutes } from "react-router-dom";
import ChatPage from "../pages/chat/chat";
import React, { useState } from 'react';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";


function AppRoute() {
    return useRoutes([
        {
            path: '/login',
            index: true,
            element: <LoginPage />,
        },
        {
            path: '/register',
            index: true,
            element: <RegisterPage />,
        },
        {
            path: '/chat',
            element: <ChatPage />,
        },
    ])
}
export default AppRoute;