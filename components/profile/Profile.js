// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Profile() {
//   const session = useSession();

//   return (
//     <>
//       <h1>
//         hey,
//         {session.status === "authenticated"
//           ? session.data.user?.name || "friend"
//           : "stranger"}
//         !
//       </h1>
//       <p>
//         {session.status === "authenticated" ? (
//           <button type="button" onClick={() => signOut()}>
//             Sign out {session.data.user?.email}
//           </button>
//         ) : (
//           <button
//             type="button"
//             onClick={() => signIn("spotify")}
//             disabled={session.status === "loading"}
//           >
//             Sign in with Spotify
//           </button>
//         )}
//       </p>
//     </>
//   );
// }
import { loginUrl } from "@/spotify";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const session = useSession();

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (session?.status === "authenticated") {
        try {
          const response = await fetch(
            "https://api.spotify.com/v1/me/playlists",
            {
              headers: {
                Authorization: `Bearer ${session.data.accessToken}`,
              },
            }
          );

          if (response.ok) {
            const playlistsData = await response.json();
            setUserPlaylists(playlistsData.items || []);
          } else {
            // Handle error fetching playlists
            console.error("Error fetching playlists:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching playlists:", error);
        }
      }
    };

    fetchPlaylists();
  }, [session]);

  return (
    <>
      <a href={loginUrl} id="signInButton">
        sign into your spotify
      </a>
      <h1>
        hey,
        {session.status === "authenticated"
          ? session.data.user?.name || "friend"
          : "stranger"}
        !
      </h1>
      <p>
        {session.status === "authenticated" ? (
          <>
            <button type="button" onClick={() => signOut()}>
              Sign out {session.data.user?.email}
            </button>
            <h2>My Playlists:</h2>
            <ul>
              {userPlaylists.map((playlist) => (
                <li key={playlist.id}>{playlist.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <button
            type="button"
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
