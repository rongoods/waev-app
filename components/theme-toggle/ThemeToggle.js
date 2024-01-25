// import { useTheme } from "next-themes";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <button onClick={toggleTheme}>
//       {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
//     </button>
//   );
// }

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensures the component is mounted and avoids server-client content mismatch
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Renders nothing until the component is mounted to prevent the mismatch error
  if (!mounted) return null;

  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      {resolvedTheme === "light"
        ? "Switch to Dark Mode"
        : "Switch to Light Mode"}
    </button>
  );
}
