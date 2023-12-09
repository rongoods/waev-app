import styles from "./TerminalLogin.module.css";

const TerminalLogin = () => {
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
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            className={styles.terminalInput}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.terminalInput}
          />
          <button type="submit" className={styles.terminalButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default TerminalLogin;

// import React from "react";
// import styles from "./TerminalLogin.module.css";

// const TerminalLogin = () => {
//   return (
//     <div className={styles.terminal}>
//       <div className={styles.titleBar}>
//         <div className={styles.buttons}>
//           <div className={styles.closeButton}></div>
//           <div className={styles.minimizeButton}></div>
//           <div className={styles.zoomButton}></div>
//           <div className={styles.title}>wæv</div>
//           <div className={styles.terminalText}>Terminal</div>
//         </div>
//       </div>
//       <div className={styles.content}>
//         <form className={styles.form}>
//           <button type="button" className={styles.loginOption}>
//             Guest Login
//           </button>
//           <button type="button" className={styles.loginOption}>
//             Admin Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TerminalLogin;
