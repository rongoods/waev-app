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

export default function CopyArtistSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artistData, setArtistData] = useState([]);

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
          )}&type=artist&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setArtistData(data.artists.items || []);
        } else {
          console.error("Failed to fetch artist data");
        }
      }
    } catch (error) {
      console.error("Error fetching artist:", error);
    }
  };

  const handleImageClick = (artist) => {
    if (artist && artist.external_urls && artist.external_urls.spotify) {
      navigator.clipboard
        .writeText(artist.external_urls.spotify)
        .then(() => alert("Artist URL copied to clipboard"))
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
          placeholder="Search for an artist"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {artistData.length > 0 ? (
        <div>
          {artistData.map((artist) => (
            <div key={artist.id}>
              <h1>{artist.name}</h1>
              <Image
                src={artist.images[0]?.url}
                alt="Artist Image"
                width={200}
                height={200}
                onClick={() => handleImageClick(artist)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>artists</p>
      )}
    </div>
  );
}
