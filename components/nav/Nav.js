import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Nav.module.css";

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
            width={50}
            height={50}
          ></Image>
        </span>
        {showDropdown && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link href={"/profile"}>
                <Image
                  src={"/profile.png"}
                  alt="persona-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className="dropdown-writing">my profile</p>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href={"/bookmarks"}>
                <Image
                  src={"/bookmark.png"}
                  alt="bookmark-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className={"dropdown-writing"}>bookmarks</p>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href={"/playlist"}>
                <Image
                  src={"/music.png"}
                  alt="playlist-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className="dropdown-writing">playlist</p>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link href={"/create-community"}>
                <Image
                  src={"/community.png"}
                  alt="community-icon"
                  height={30}
                  width={30}
                ></Image>
                <p className="dropdown-writing">create a community</p>
              </Link>
            </li>
            <li className="dropdown-item">
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
      </li>
      <h1 className={styles.title}>wæv</h1>
    </nav>
  );
}
