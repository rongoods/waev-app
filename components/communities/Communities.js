import styles from "./Communities.module.css";
import { useTheme } from "next-themes";

export default function Communities() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1 className={styles.title}>Communities</h1>
    </div>
  );
}
