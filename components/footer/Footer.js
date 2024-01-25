import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Footer() {
  const [selectedPage, setSelectedPage] = useState(""); // State to track selected page
  const { theme, setTheme } = useTheme();
  const handlePageChange = (pageName) => {
    setSelectedPage(pageName); // Function to set the selected page
  };

  return (
    <footer>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={styles.footerBtn}
          onClick={() => handlePageChange("home")}
        >
          {/* {selectedPage === "home" ? (
            <p className={styles.altTitle}>home</p>
          ) : ( */}
          <Image
            src={"/home-pixel.png"}
            alt="home-icon"
            width={50}
            height={50}
            className={styles.image}
          />
          {/* )} */}
        </Link>
        <Link
          href={"/discover"}
          className={styles.footerBtn}
          onClick={() => handlePageChange("discover")}
        >
          {/* {selectedPage === "discover" ? (
            <p className={styles.altTitle}>discover</p>
          ) : ( */}
          <Image
            src={"/search-pixel.png"}
            alt="discover-icon"
            width={50}
            height={50}
            className={styles.image}
          />
          {/* )} */}
        </Link>
        <Link
          href={"/profile"}
          className={styles.footerBtn}
          onClick={() => handlePageChange("profile")}
        >
          {/* {selectedPage === "profile" ? (
            <p className={styles.altTitle}>profile</p>
          ) : ( */}
          <Image
            src={"/default-profile-image.png"}
            alt="profile-icon"
            width={50}
            height={50}
            className={styles.image}
          ></Image>
          {/* )} */}
        </Link>
        {/* <Link
          href={"/alerts"}
          className={styles.footerBtn}
          onClick={() => handlePageChange("alerts")}
        >
          {selectedPage === "alerts" ? (
            <p>alerts</p>
          ) : (
            <Image
              src={"/alert.png"}
              alt="alert-icon"
              width={50}
              height={50}
              className={styles.image}
            ></Image>
          )}
        </Link>
        <Link
          href={"/messages"}
          className={styles.footerBtn}
          onClick={() => handlePageChange("messages")}
        >
          {selectedPage === "messages" ? (
            <p>messages</p>
          ) : (
            <Image
              src={"/message.png"}
              alt="messages-icon"
              width={50}
              height={50}
              className={styles.image}
            ></Image>
          )}
        </Link> */}
      </nav>
    </footer>
  );
}
