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

export default function CopySongSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [songData, setSongData] = useState(null);

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
          )}&type=track&limit=1`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSongData(data.tracks.items[0]);
          setEmbedUrl(data.tracks.items[0]?.external_urls.spotify || "");
        } else {
          console.error("Failed to fetch song data");
        }
      }
    } catch (error) {
      console.error("Error fetching song:", error);
    }
  };

  const handleImageClick = () => {
    if (songData && songData.external_urls && songData.external_urls.spotify) {
      navigator.clipboard
        .writeText(songData.external_urls.spotify)
        .then(() => alert("Song URL copied to clipboard"))
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
          placeholder="Search for a song"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {songData ? (
        <div>
          <h1>{songData.name}</h1>
          <p>{songData.artists[0].name}</p>
          <Image
            src={songData.album.images[0].url}
            alt="Album Cover"
            width={200}
            height={200}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <p>tracks</p>
      )}
    </div>
  );
}
