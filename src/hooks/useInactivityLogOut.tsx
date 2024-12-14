import { useEffect, useRef } from "react";

const useInactivityLogout = (onLogout: () => void, timeout: number = 1200000) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onLogout();
    }, timeout);
  };
  
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

export default useInactivityLogout;
