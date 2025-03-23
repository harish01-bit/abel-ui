import { useRoutes } from "react-router-dom";
import ChatPage from "../pages/chat/chat";
import React, { useState } from 'react';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { ForgotPasswordModule } from "../modules/user/forgot-password/forgot-password.module";
import AudioChatPage from "../pages/audio/audio-chat";
import { SettingsPage } from "../pages/settings/settings";
import AuthHeaderComponent from "../layout/header/auth-header";
import Terms from "../pages/terms/terms";
import Privacy from "../pages/privacy/privacy";
import UnAuthHeaderComponent from "../layout/header/unauth-header";


function AppRoute() {
    return useRoutes([

        {
            path: '/',
            index: false,
            element: <UnAuthHeaderComponent />,
            children: [
                {
                    path: '/',
                    index: false,
                    element: <LoginPage />,
                },
                {
                    path: '/login',
                    index: false,
                    element: <LoginPage />,
                },
                {
                    path: '/terms',
                    index: false,
                    element: <Terms />,
                },
                {
                    path: '/privacy',
                    index: false,
                    element: <Privacy />,
                },
            ]

        },
        {
            path: '/',
            index: false,
            element: <AuthHeaderComponent />,
            children: [
                {
                    path: 'chat',
                    index: true,
                    element: <ChatPage />,
                },
                {
                    path: 'settings',
                    index: false,
                    element: <SettingsPage />,
                },
                {
                    path: '/audio',
                    index: false,
                    element: <AudioChatPage />,
                },

            ]
        },
        {
            path: '/register',
            index: false,
            element: <RegisterPage />,
        },

        {
            path: '/forgotpassword',
            index: false,
            element: <ForgotPasswordModule />,
        }
    ])
}
export default AppRoute;