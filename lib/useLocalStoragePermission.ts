import { useState, useEffect } from "react";

const STORAGE_KEY = "localStoragePermission";

export const useLocalStoragePermission = () => {
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const storedPermission = localStorage.getItem(STORAGE_KEY);
    if (storedPermission !== null) {
      setIsAllowed(storedPermission === "true");
    }
  }, []);

  const allowStorage = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsAllowed(true);
  };

  const denyStorage = () => {
    setIsAllowed(false);
  };

  return { isAllowed, allowStorage, denyStorage };
};
