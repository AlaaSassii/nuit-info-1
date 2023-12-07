import { useEffect, useState } from "react";

export const useLocalStorage = () => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en'; // Fix the key here
    });

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-language', language);

        localStorage.setItem('language', language);
    }, [language]); // Remove language from the dependency array if not needed

    return { language, changeLanguage };
}
