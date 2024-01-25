import { useTheme } from "next-themes";
import styles from "./Discover.module.css";

export default function DiscoverPage() {
  const { theme, setTheme } = useTheme();
  return <h1 className={styles.title}>Discover</h1>;
}
