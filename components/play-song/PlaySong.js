import React, { useEffect, useCallback } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const PlaySong = ({ trackId, accessToken }) => {
  const playTrack = useCallback(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);

    if (!trackId || !accessToken) {
      console.error("Track ID or Access Token missing");
      return;
    }

    spotifyApi.play(
      {
        uris: [`spotify:track:${trackId}`],
      },
      (error, response) => {
        if (error) {
          console.error("Error playing track:", error);
        } else {
          console.log("Track played successfully:", response);
          // Optionally handle success
        }
      }
    );
  }, [trackId, accessToken]);

  useEffect(() => {
    playTrack();
  }, [playTrack]);

  return null; // Since this component is handling playing the song, it doesn't render anything
};

export default PlaySong;
