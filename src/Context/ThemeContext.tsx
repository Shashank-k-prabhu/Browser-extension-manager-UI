import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
    theme: Theme;
    toggleTheme: () => void;
}>({
    theme: "light",
    toggleTheme: () => { },
});


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
        else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);


    useEffect(() => {
        document.documentElement.classList.remove("theme-light", "theme-dark");
        document.documentElement.classList.add(`theme-${theme}`);

    }, [theme]);


    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);