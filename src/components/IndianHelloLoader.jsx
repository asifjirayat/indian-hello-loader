import { useEffect, useRef } from "react";
import { indianGreetings } from "./IndianGreetings.js";
import styles from "./IndianHelloLoader.module.css";
import { useThemeManager } from "./useThemeManager.js";
import { useFontLoader } from "./useFontLoader.js";

const IndianHelloLoader = ({ theme = "auto" }) => {
  const textRef = useRef(null);

  // Load Google Font - only once
  useFontLoader("Roboto Condensed", "400");

  // Apply theme only once per prop change
  useThemeManager(theme);

  // Cycle through languages every 400ms
  useEffect(() => {
    let currentIndex = 0;

    const updateText = () => {
      currentIndex = (currentIndex + 1) % indianGreetings.length;
      if (textRef.current) {
        textRef.current.textContent = indianGreetings[currentIndex];
      }
    };

    updateText(); // Show first immediately
    const interval = setInterval(updateText, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.text} ref={textRef}>
        {indianGreetings[0]}
      </span>
    </div>
  );
};

export default IndianHelloLoader;
