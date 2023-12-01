// import Link from "next/link";
// import styles from "./Footer.module.css";
// import Image from "next/image";
// import { useState } from "react";

// export default function Footer() {
//   const [hover, setHover] = useState(false); // initial false

//   const HoverData = "hovered";

//   const onHover = (event) => {
//     event.preventDefault();
//     setHover(true); // turn true
//     console.log("hovered");
//   };

//   const onHoverOver = (event) => {
//     event.preventDefault(); // turn false
//     setHover(false);
//   };

//   return (
//     <footer>
//       <nav className={styles.nav}>
//         <Link href="/" className={styles.footerBtn}>
//           {hover && <p className={hover}>{HoverData}</p>}
//           <Image
//             onMouseEnter={(event) => onHover(event)}
//             onMouseLeave={(event) => onHoverOver(event)}
//             src={"/home.png"}
//             alt="home-icon"
//             width={50}
//             height={50}
//             className={styles.image}
//           />
//           {/* <br></br>
//           home */}
//         </Link>
//         <Link href={"/discover"} className={styles.footerBtn}>
//           {hover && <p className={hover}>{HoverData}</p>}
//           <Image
//             onMouseEnter={(event) => onHover(event)}
//             onMouseLeave={(event) => onHoverOver(event)}
//             src={"/search.png"}
//             alt="discover-icon"
//             width={50}
//             height={50}
//             className={styles.image}
//           />
//           {/* <br></br>
//           discover */}
//         </Link>
//         <Link href={"/communities"} className={styles.footerBtn}>
//           {hover && <p className={hover}>{HoverData}</p>}
//           <Image
//             onMouseEnter={(event) => onHover(event)}
//             onMouseLeave={(event) => onHoverOver(event)}
//             src={"/community.png"}
//             alt="tribe-icon"
//             width={50}
//             height={50}
//             className={styles.image}
//           ></Image>
//           {/* <br></br>
//           community */}
//         </Link>
//         <Link href={"/alerts"} className={styles.footerBtn}>
//           {hover && <p className={hover}>{HoverData}</p>}
//           <Image
//             onMouseEnter={(event) => onHover(event)}
//             onMouseLeave={(event) => onHoverOver(event)}
//             src={"/alert.png"}
//             alt="alert-icon"
//             width={50}
//             height={50}
//             className={styles.image}
//           ></Image>
//           {/* <br></br>
//           alerts */}
//         </Link>
//         {/* <Link href={"/playlist"}>
//           <Image
//             src={"/music.png"}
//             alt="playlist-icon"
//             width={50}
//             height={50}
//             className={styles.image}
//           ></Image>
//           <br></br>
//           playlist
//         </Link> */}
//         {/* <Link href={"/profile"}>
//           <Image
//             src={"/profile.png"}
//             alt="persona-icon"
//             width={60}
//             height={60}
//           ></Image>
//           <br></br>
//           persona
//         </Link> */}
//         <Link href={"/messages"} className={styles.footerBtn}>
//           {hover && <p className={hover}>{HoverData}</p>}
//           <Image
//             onMouseEnter={(event) => onHover(event)}
//             onMouseLeave={(event) => onHoverOver(event)}
//             src={"/message.png"}
//             alt="messages-icon"
//             width={50}
//             height={50}
//             className={styles.image}
//           ></Image>
//           {/* <br></br>
//           messages */}
//         </Link>
//       </nav>
//     </footer>
//   );
// }

import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [selectedPage, setSelectedPage] = useState(""); // State to track selected page

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
          {selectedPage === "home" ? (
            <p>home</p>
          ) : (
            <Image
              src={"/home.png"}
              alt="home-icon"
              width={50}
              height={50}
              className={styles.image}
            />
          )}
        </Link>
        <Link
          href={"/discover"}
          className={styles.footerBtn}
          onClick={() => handlePageChange("discover")}
        >
          {selectedPage === "discover" ? (
            <p>discover</p>
          ) : (
            <Image
              src={"/search.png"}
              alt="discover-icon"
              width={50}
              height={50}
              className={styles.image}
            />
          )}
        </Link>
        <Link
          href={"/communities"}
          className={styles.footerBtn}
          onClick={() => handlePageChange("communities")}
        >
          {selectedPage === "communities" ? (
            <p>communities</p>
          ) : (
            <Image
              src={"/community.png"}
              alt="tribe-icon"
              width={50}
              height={50}
              className={styles.image}
            ></Image>
          )}
        </Link>
        <Link
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
        </Link>
      </nav>
    </footer>
  );
}
