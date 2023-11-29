import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src={"/home.png"}
            alt="home-icon"
            width={50}
            height={50}
            className={styles.image}
          />
          <br></br>
          home
        </Link>
        <Link href={"/discover"}>
          <Image
            src={"/search.png"}
            alt="discover-icon"
            width={50}
            height={50}
            className={styles.image}
          />
          <br></br>
          discover
        </Link>
        <Link href={"/community"}>
          <Image
            src={"/community.png"}
            alt="tribe-icon"
            width={50}
            height={50}
            className={styles.image}
          ></Image>
          <br></br>
          community
        </Link>
        <Link href={"/alerts"}>
          {" "}
          <Image
            src={"/alert.png"}
            alt="alert-icon"
            width={50}
            height={50}
            className={styles.image}
          ></Image>
          <br></br>
          alerts
        </Link>
        {/* <Link href={"/playlist"}>
          <Image
            src={"/music.png"}
            alt="playlist-icon"
            width={50}
            height={50}
            className={styles.image}
          ></Image>
          <br></br>
          playlist
        </Link> */}
        {/* <Link href={"/profile"}>
          <Image
            src={"/profile.png"}
            alt="persona-icon"
            width={60}
            height={60}
          ></Image>
          <br></br>
          persona
        </Link> */}
        <Link href={"/messages"}>
          <Image
            src={"/message.png"}
            alt="messages-icon"
            width={50}
            height={50}
            className={styles.image}
          ></Image>
          <br></br>
          messages
        </Link>
      </nav>
    </footer>
  );
}
