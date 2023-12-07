import React, { useState, useEffect } from "react";
import Image from "next/image";

const getAccessToken = async (clientId, clientSecret, redirectUri) => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        redirect_uri: redirectUri,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.access_token;
    } else {
      throw new Error("Failed to obtain Spotify access token");
    }
  } catch (error) {
    console.error("Error obtaining Spotify access token:", error);
    return null;
  }
};

export default function CopyPlaylistSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistData, setPlaylistData] = useState([]);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      return;
    }

    try {
      const accessToken = await getAccessToken(
        "680c00e1f7a843b4b611679f5a56b0d8",
        "2b7a5850b2ad4c70ad4a1ad26e6696ef",
        "http://localhost:3000/playlist"
      );

      if (accessToken) {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            searchTerm
          )}&type=playlist&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPlaylistData(data.playlists.items || []);
          setEmbedUrl("");
        } else {
          console.error("Failed to fetch playlist data");
        }
      }
    } catch (error) {
      console.error("Error fetching playlist:", error);
    }
  };

  const handleImageClick = (playlist) => {
    if (playlist && playlist.external_urls && playlist.external_urls.spotify) {
      navigator.clipboard
        .writeText(playlist.external_urls.spotify)
        .then(() => alert("Playlist URL copied to clipboard"))
        .catch((err) => console.error("Failed to copy URL: ", err));
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a playlist"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {playlistData.length > 0 ? (
        <div>
          {playlistData.map((playlist) => (
            <div key={playlist.id}>
              <h1>{playlist.name}</h1>
              <p>{playlist.owner.display_name}</p>
              <Image
                src={playlist.images[0]?.url}
                alt="Playlist Cover"
                width={200}
                height={200}
                onClick={() => handleImageClick(playlist)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>playlists</p>
      )}
    </div>
  );
}
