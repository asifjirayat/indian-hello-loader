import { useEffect } from "react";

/**
 * Custom hook to manager theme injection and class toggling
 * @param {string} theme - "auto", "light", or "dark"
 */

export const useThemeManager = (theme) => {
  useEffect(() => {
    // Define styles once - inject only if not already present
    const styleId = "indian-hello-loader-theme";
    let style = document.getElementById(styleId);

    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        :root {
        --bg-color: #f8f9fa;
        --text-color: #212529;
        } 
        .dark {
        --bg-color: #121212;
        --text-color: #f8f9fa;
        }`;
      document.head.appendChild(style);
    }

    // Apply theme class to <html>
    if (theme === "auto") {
      const prefersDark = window.matchMedia(
        "(perfers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => document.head.removeChild(style);
  }, [theme]);
};
