import { useEffect } from "react";

/**
 * Injects Google gonts link into <head> if not already present
 * @param {string} fontName - e.g., "Poppins"
 * @param {string[]} weight - e.g., "400"
 */
export const useFontLoader = (fontName = "Poppins", weight = "400") => {
  useEffect(() => {
    // Only encode font name if needed (e.g., for "Roboto Condensed")
    const encodedFontName = (fontName) => encodeURIComponent(fontName);

    const url = `https://fonts.googleapis.com/css2?family=${encodedFontName}:wght@${weight}&display=swap`;

    const fontLinkId = `google-font-${fontName
      .toLowerCase()
      .replace(/\s+/g, "-")}-${weight}`;

    // Skip if font is already loaded
    if (document.getElementById(fontLinkId)) return;

    const link = document.createElement("link");
    link.id = fontLinkId;
    link.rel = "stylesheet";
    link.href = url;

    document.head.appendChild(link);

    return () => {
      const el = document.getElementById(fontLinkId);
      if (el) el.remove();
    };
  }, [fontName, weight]);
};
