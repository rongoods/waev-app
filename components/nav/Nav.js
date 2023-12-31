import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Nav.module.css";
import DateTime from "../current-date/DateTime";

export default function Navbar() {
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
                  src={"/profile.png"}
                  alt="persona-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>my profile</p>
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/bookmarks"}>
                <Image
                  src={"/bookmark.png"}
                  alt="bookmark-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>bookmarks</p>
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/playlist"}>
                <Image
                  src={"/music.png"}
                  alt="playlist-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>playlist</p>
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/create-community"}>
                <Image
                  src={"/community.png"}
                  alt="community-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>create a community</p>
              </Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link href={"/settings"}>
                <Image
                  src={"/settings.png"}
                  alt="settings-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={styles.dropdownWriting}>settings</p>
              </Link>
            </li>
          </ul>
        )}
      </li>{" "}
      <h1 className={styles.title}>wæv</h1>
      {/* <div className={styles.rightContainer}>
        <DateTime />
      </div> */}
    </nav>
  );
}
