import { useState } from "react";

export default function SpotifyPlayer({ initialUrl }) {
  const [url, setUrl] = useState(initialUrl || "");

  const handleInputChange = (e) => {
    // Extracting the Spotify track/playlist ID from the URL and constructing the embed URL
    const spotifyUrl = e.target.value;
    const urlParts = spotifyUrl.split("/");
    const id = urlParts[urlParts.length - 1];
    const embedUrl = `https://open.spotify.com/embed/track/${id}`; // Change this to 'playlist' for a playlist URL

    setUrl(embedUrl);
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Paste Spotify URL here"
      />
      {url && (
        <iframe
          src={url}
          width="500"
          height="100"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          title="Embedded Spotify Player"
        ></iframe>
      )}
    </div>
  );
}
