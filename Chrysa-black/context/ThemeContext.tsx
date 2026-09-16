"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "black" | "white";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("black");

  useEffect(() => {
    const saved = localStorage.getItem("chrysa-theme") as Theme | null;
    if (saved === "black" || saved === "white") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    // Sync class on root and body to allow exact theme styles
    document.documentElement.classList.remove("theme-black", "theme-white");
    document.documentElement.classList.add(`theme-${theme}`);
    document.body.classList.remove("theme-black", "theme-white");
    document.body.classList.add(`theme-${theme}`);

    // Set matching background color on body and html to avoid bleed
    const bgColor = theme === "black" ? "#0B0A08" : "#f2f0eb";
    const textColor = theme === "black" ? "#F5F1E8" : "#1b1d1c";
    document.documentElement.style.backgroundColor = bgColor;
    document.documentElement.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("chrysa-theme", newTheme);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    handleSetTheme(theme === "black" ? "white" : "black");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
