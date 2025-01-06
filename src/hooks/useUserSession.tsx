import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationService } from "../helpers/authetication.service";
import { setLocalStorage } from "../helpers/util.service";
import { useRefreshToken } from "../middleware/hooks/useLoginApi";

const useUserSesstion = (onLogout: () => void, timeout: number = 1200000) => {
    const navigate = useNavigate()
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const {

        mutateAsync: refreshToken
    } = useRefreshToken();
    const resetTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            onLogout();
            navigate("/login");
        }, timeout);
    };

    useEffect(() => {
     
        let intervalId: NodeJS.Timeout | null = null;

        // The function that will handle the async call
        const refreshSession = async () => {
            if (AuthenticationService.isUserLoggedIn) {
                console.log("user logged in")
                const res = await refreshToken({}); // Call your refresh token function
                if (res?.success) {
                    console.log(res.token)
                    setLocalStorage("token", res.token)
                } else {
                    if (intervalId) {
                        clearInterval(intervalId);
                    }
                }
            }
            else {
                if (intervalId) {
                    clearInterval(intervalId);
                }
            }
        };

        intervalId = setInterval(() => {
            refreshSession(); // Call the async function inside the interval
        }, 1 * 60 * 1000); // 5 minutes in milliseconds

        // Cleanup the interval when component unmounts or isUserLoggedIn changes
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [AuthenticationService.isUserLoggedIn]);


    useEffect(() => {
        const events = ["mousemove", "keydown", "click", "scroll"];

        // Attach event listeners
        const handleActivity = () => resetTimer();
        events.forEach((event) => window.addEventListener(event, handleActivity));

        // Initialize the timer
        resetTimer();

        // Cleanup event listeners and timer
        return () => {
            events.forEach((event) => window.removeEventListener(event, handleActivity));
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [onLogout, timeout]);

    return null;
};

export default useUserSesstion;
