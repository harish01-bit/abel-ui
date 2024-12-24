import { useRoutes } from "react-router-dom";
import ChatPage from "../pages/chat/chat";
import React, { useState } from 'react';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { ForgotPasswordModule } from "../modules/user/forgot-password/forgot-password.module";
import AudioChatPage from "../pages/audio/audio-chat";


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
            path: '/forgotpassword',
            index: true,
            element: <ForgotPasswordModule />,
        },
        {
            path: '/chat',
            element: <ChatPage />,
        },
        {
            path: '/audio',
            index: true,
            element: <AudioChatPage />,
        },
    ])
}
export default AppRoute;