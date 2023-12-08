import React, { useState } from "react";
import "./ToggleMode.module.css";

export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");

    return (
      <button onClick={toggleMode} className="toggle-button">
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
  };
}
