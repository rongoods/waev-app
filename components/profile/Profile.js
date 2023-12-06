import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return (
    <>
      <h1>
        hey,{" "}
        {session.status === "authenticated"
          ? session.data.user?.name || "friend"
          : "stranger"}
        !
      </h1>
      <p>
        {session.status === "authenticated" ? (
          <button type="button" onClick={() => signOut()}>
            Sign out {session.data.user?.email}
          </button>
        ) : (
          <button
            type="button"
            style={{ "--accent-color": "#15883e" }}
            onClick={() => signIn("spotify")}
            disabled={session.status === "loading"}
          >
            Sign in with Spotify
          </button>
        )}
      </p>
    </>
  );
}

// export default function ProfilePage() {
//   return (
//     <>
//       <body>
//         <h1>Display your Spotify profile data</h1>

//         <section id="profile">
//           <h2>
//             Logged in as <span id="displayName"></span>
//           </h2>
//           <span id="avatar"></span>
//           <ul>
//             <li>
//               User ID: <span id="id"></span>
//             </li>
//             <li>
//               Email: <span id="email"></span>
//             </li>
//             <li>
//               Spotify URI: <a id="uri" href="#"></a>
//             </li>
//             <li>
//               Link: <a id="url" href="#"></a>
//             </li>
//             <li>
//               Profile Image: <span id="imgUrl"></span>
//             </li>
//           </ul>
//         </section>
//       </body>
//     </>
//   );
// }
