// import styles from "./TerminalLogin.module.css";

// const TerminalLogin = () => {
//   return (
//     <body className={styles.backgroundBody}>
//       {" "}
//       <div className={styles.terminal}>
//         <div className={styles.titleBar}>
//           <div className={styles.buttons}>
//             <div className={styles.closeButton}></div>
//             <div className={styles.minimizeButton}></div>
//             <div className={styles.zoomButton}></div>
//           </div>
//           <div className={styles.title}>wæv</div>
//           <div className={styles.terminalText}>Terminal ⌥⌘1</div>
//         </div>
//         <div className={styles.content}>
//           <form className={styles.form}>
//             <input
//               type="text"
//               placeholder="Username"
//               className={styles.terminalInput}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className={styles.terminalInput}
//             />
//             <button type="submit" className={styles.terminalButton}>
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </body>
//   );
// };

// export default TerminalLogin;

// -----------________________---------------________________-----------___________________---------

//below is experiment with spotify login on login page

// import styles from "./TerminalLogin.module.css";
// import SpotifyWebApi from "spotify-web-api-js";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// // import { loginUrl } from "@/spotify";
// import { getTokenFromUrl } from "@/spotify";
// import { useRouter } from "next/router";

// const spotify = new SpotifyWebApi();

// const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/profile";
// const clientId = "680c00e1f7a843b4b611679f5a56b0d8";
// const scopes = [
//   "user-read-playback-state",
//   "user-modify-playback-state",
//   "user-read-currently-playing",
//   "streaming",
//   "playlist-read-private",
//   "playlist-read-collaborative",
//   "playlist-modify-private",
//   "playlist-modify-public",
//   "user-follow-modify",
//   "user-follow-read",
//   "user-read-playback-position",
//   "user-top-read",
//   "user-read-recently-played",
//   "user-library-modify",
//   "user-library-read",
// ];

// const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;
// const TerminalLogin = () => {
//   const [spotifyToken, setSpotifyToken] = useState("");
//   const [user, setUser] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const _spotifyToken = getTokenFromUrl().access_token;
//     window.location.hash = "";

//     if (_spotifyToken) {
//       setSpotifyToken(_spotifyToken);
//       spotify.setAccessToken(_spotifyToken);

//       spotify
//         .getMe()
//         .then((userData) => {
//           setUser(userData);
//         })
//         .catch((error) => {
//           console.error("Error fetching user data: ", error);
//         });
//       setLoggedIn(true);
//       router.push("/");
//     }
//   }, [router]);

//   const handleLogin = () => {
//     window.location.href = loginUrl;
//   };

//   return (
//     <div className={styles.terminal}>
//       <div className={styles.titleBar}>
//         <div className={styles.buttons}>
//           <div className={styles.closeButton}></div>
//           <div className={styles.minimizeButton}></div>
//           <div className={styles.zoomButton}></div>
//         </div>
//         <div className={styles.title}>wæv</div>
//         <div className={styles.terminalText}>Terminal ⌥⌘1</div>
//       </div>
//       <div className={styles.content}>
//         <form className={styles.form} onSubmit={handleLogin}>
//           <button type="submit" className={styles.terminalButton}>
//             Login with Spotify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TerminalLogin;
//____________----------------------______________---------------
// pls work

import styles from "./TerminalLogin.module.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
import { getTokenFromUrl } from "@/spotify";
import { useRouter } from "next/router";

const spotify = new SpotifyWebApi();

const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "680c00e1f7a843b4b611679f5a56b0d8";
const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-library-modify",
  "user-library-read",
];

const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const TerminalLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const _spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = "";

    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);

      setLoggedIn(true);
      router.push("/");
    }
  }, [router]);

  const handleLogin = () => {
    window.location.href = loginUrl; // Redirect to Spotify authentication
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.titleBar}>
        <div className={styles.buttons}>
          <div className={styles.closeButton}></div>
          <div className={styles.minimizeButton}></div>
          <div className={styles.zoomButton}></div>
        </div>
        <div className={styles.title}>wæv</div>
        <div className={styles.terminalText}>Terminal ⌥⌘1</div>
      </div>
      <div className={styles.content}>
        <a href={loginUrl} id="signInButton" className={styles.login}>
          Login to Spotify
        </a>
        <form className={styles.form} onSubmit={handleLogin}>
          {/* <button type="submit" className={styles.terminalButton}>
            Login with Spotify
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default TerminalLogin;
