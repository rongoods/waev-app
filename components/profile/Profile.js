//--------------------------------------------------
//this works best so far
// import { loginUrl } from "@/spotify";
// import { getTokenFromUrl } from "@/spotify";
// import SpotifyWebApi from "spotify-web-api-js";
// import { useState, useEffect } from "react";

// const spotify = new SpotifyWebApi();

// export default function Profile() {
//   const [spotifyToken, setSpotifyToken] = useState("");
//   const [userPlaylists, setUserPlaylists] = useState([]);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     const _spotifyToken = getTokenFromUrl().access_token;
//     window.location.hash = "";

//     if (_spotifyToken) {
//       setSpotifyToken(_spotifyToken);
//       setLoggedIn(true);
//       spotify.setAccessToken(_spotifyToken);

//       spotify
//         .getUserPlaylists()
//         .then((playlists) => {
//           setUserPlaylists(playlists.items); // Save playlists to state
//         })
//         .catch((error) => {
//           console.error("Error fetching playlists: ", error);
//         });
//     }
//   }, []);

//   const handleLogin = () => {
//     const loginUrl = loginUrl; // Replace with your Spotify login URL
//     window.location.href = loginUrl;
//   };

//   // Render user playlists
//   const renderPlaylists = () => {
//     return (
//       <div>
//         <h2>Your Playlists:</h2>
//         <ul>
//           {userPlaylists.map((playlist) => (
//             <li key={playlist.id}>{playlist.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {!loggedIn ? (
//         <a href={loginUrl}>Login to Spotify</a>
//       ) : (
//         <div>
//           {spotifyToken && userPlaylists.length > 0 ? (
//             renderPlaylists()
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

//---------________________-------------_______________----------

import SpotifyWebApi from "spotify-web-api-js";
import { useState, useEffect } from "react";
import Image from "next/image";
import { loginUrl } from "@/spotify";
import { getTokenFromUrl } from "@/spotify";
import styles from "./Profile.module.css";
import PlaySong from "../play-song/PlaySong";

const spotify = new SpotifyWebApi();

export default function Profile() {
  const [spotifyToken, setSpotifyToken] = useState("");
  const [user, setUser] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [currentPlayback, setCurrentPlayback] = useState(null);

  useEffect(() => {
    const _spotifyToken = getTokenFromUrl().access_token;
    window.location.hash = "";

    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotify.setAccessToken(_spotifyToken);

      spotify
        .getMe()
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
        });

      spotify
        .getUserPlaylists()
        .then((playlists) => {
          setUserPlaylists(playlists.items);
        })
        .catch((error) => {
          console.error("Error fetching playlists: ", error);
        });

      spotify
        .getMyRecentlyPlayedTracks()
        .then((tracks) => {
          setRecentlyPlayedTracks(tracks.items);
        })
        .catch((error) => {
          console.error("Error fetching recently played tracks: ", error);
        });

      spotify
        .getMyTopTracks()
        .then((tracks) => {
          setTopTracks(tracks.items);
        })
        .catch((error) => {
          console.error("Error fetching top tracks: ", error);
        });

      spotify
        .getMyCurrentPlaybackState()
        .then((playback) => {
          setCurrentPlayback(playback);
        })
        .catch((error) => {
          console.error("Error fetching current playback: ", error);
        });

      spotify
        .getMyCurrentPlayingTrack()
        .then((track) => {
          setCurrentTrack(track);
        })
        .catch((error) => {
          console.error("Error fetching current track: ", error);
        });

      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const loginUrl = { loginUrl };
    window.location.href = loginUrl;
  };

  const handlePlaylistClick = (playlistId) => {
    spotify
      .getPlaylistTracks(playlistId)
      .then((tracks) => {
        console.log("Tracks in playlist:", tracks);
        // Handle playlist tracks
      })
      .catch((error) => {
        console.error("Error fetching playlist tracks: ", error);
      });

    spotify
      .getPlaylistCoverImage(playlistId)
      .then((coverImage) => {
        console.log("Playlist cover image:", coverImage);
        // Handle cover image
      })
      .catch((error) => {
        console.error("Error fetching playlist cover image: ", error);
      });
  };

  // Functions for playback control
  const transferPlayback = (deviceIds) => {
    spotify.transferMyPlayback(deviceIds).catch((error) => {
      console.error("Error transferring playback: ", error);
    });
  };

  const playTrack = () => {
    spotify.play().catch((error) => {
      console.error("Error playing track: ", error);
    });
  };

  const pauseTrack = () => {
    spotify.pause().catch((error) => {
      console.error("Error pausing track: ", error);
    });
  };

  const queueTrack = (uri) => {
    spotify.queue(uri).catch((error) => {
      console.error("Error queuing track: ", error);
    });
  };

  // ... Other playback control functions (skip, previous)

  return (
    <div className={styles.profileContainer}>
      {user && (
        <div className={styles.userProfile}>
          {user && user.images && user.images.length > 0 ? (
            <Image src={user.images[0]?.url} alt="User Profile" />
          ) : (
            <Image
              src="/default-profile-image.png"
              alt="Default Profile Icon"
              width={50}
              height={50}
              className={styles.profileImage}
            />
          )}
          <h2 className={styles.username}>
            {user ? user.display_name : "Loading..."}
          </h2>
        </div>
      )}
      {!loggedIn ? (
        <a href={loginUrl}>Login to Spotify</a>
      ) : (
        <div className={styles.mainContent}>
          <div className={styles.playlistsSection}>
            <h3 calssName={styles.subHeader}> playlists</h3>
            {userPlaylists.map((playlist) => (
              <div key={playlist.id}>
                <Image
                  src={playlist.images[0]?.url}
                  alt={playlist.name}
                  onClick={() => handlePlaylistClick(playlist.id)}
                  width={150}
                  height={150}
                />
                <h3>{playlist.name}</h3>
              </div>
            ))}
          </div>
          <div className={styles.recentTracksSection}>
            <h3 calssName={styles.subHeader}>Recently Played Tracks</h3>
            <ul>
              {recentlyPlayedTracks.map((track) => (
                <li key={track.track.id}>
                  <Image
                    src={track.track.album.images[0]?.url}
                    alt={track.track.name}
                    width={100}
                    height={100}
                  />
                  {track.track.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.topTracksSection}>
            <h3 calssName={styles.subHeader}>Top Tracks</h3>
            <ul>
              {topTracks.map((track) => (
                <li key={track.id}>
                  <Image
                    src={track.album.images[0]?.url}
                    alt={track.name}
                    width={100}
                    height={100}
                  />
                  {track.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Implement Spotify player */}
          {currentPlayback && (
            <div>
              <h3>Currently Playing</h3>
              <p>{currentPlayback.item.name}</p>
              {/* Render playback controls */}
              <button onClick={playTrack}>Play</button>
              <button onClick={pauseTrack}>Pause</button>
              <PlaySong
                trackId={currentPlayback.item.id}
                accessToken={spotifyToken}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
