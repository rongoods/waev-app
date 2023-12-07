import React from "react";
import PlaylistComponent from "./PlaylistComponent";

const PlaylistPage = () => {
  // Replace with your access token and playlist ID
  const accessToken = "your_access_token";
  const playlistID = "your_playlist_id";

  return (
    <div>
      <h1>Playlist Page</h1>
      <PlaylistComponent accessToken={accessToken} playlistID={playlistID} />
    </div>
  );
};

export default PlaylistPage;

// const accessToken = await getSpotifyAccessToken('680c00e1f7a843b4b611679f5a56b0d8', '2b7a5850b2ad4c70ad4a1ad26e6696ef', 'http://localhost:3000/playlist')

// const getUserPlaylists = async (accessToken, userID) => {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };

//   const response = await fetch(`${baseURI}users/${userID}/playlists`, options);
//   return response.json();
// };
