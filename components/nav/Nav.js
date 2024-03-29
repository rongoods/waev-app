import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Nav.module.css";
import DateTime from "../current-date/DateTime";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.navbar}>
      <li className={styles.navItem} onClick={toggleDropdown}>
        <span className={styles.dropdownBtn}>
          <Image
            src={"/more.png"}
            alt={"more-icon"}
            width={43}
            height={43}
          ></Image>
        </span>
        {showDropdown && (
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}>
              <Link href={"/profile"}>
                <Image
                  src={"/default-profile-image.png"}
                  alt="persona-icon"
                  height={30}
                  width={30}
                  className={styles.image}
                ></Image>
                <p className={styles.dropdownWriting}>my profile</p>
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/bookmarks"}>
                <Image
                  src={"/fullheart-pixel.png"}
                  alt="bookmark-icon"
                  height={30}
                  width={30}
                  className={styles.image}
                ></Image>
                <p className={styles.dropdownWriting}>bookmarks</p>
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/playlist"}>
                <Image
                  src={"/music-pixel.png"}
                  alt="playlist-icon"
                  height={30}
                  width={30}
                  className={styles.image}
                ></Image>
                <p className={styles.dropdownWriting}>playlist</p>
              </Link>
            </li>
            {/* <li className={styles.dropdownItem}>
              <Link href={"/create-community"}>
                <Image
                  src={"/community-pixel.png"}
                  alt="community-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>create a community</p>
              </Link>
            </li> */}
            {/* <li className={styles.dropdownItem}>
              <Link href={"/settings"}>
                <Image
                  src={"/settings-pixel.png"}
                  alt="settings-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>settings</p>
              </Link>
            </li> */}
          </ul>
        )}
      </li>{" "}
      <br></br>
      <ThemeToggle />
      <h1 className={styles.title}>wæv</h1>
      {/* <div className={styles.rightContainer}>
        <DateTime />
      </div> */}
    </nav>
  );
}
