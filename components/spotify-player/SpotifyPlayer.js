// import { useState } from "react";

// export default function SpotifyPlayer({ initialUrl }) {
//   const [url, setUrl] = useState(initialUrl || "");

//   const handleInputChange = (e) => {
//     // Extracting the Spotify track/playlist ID from the URL and constructing the embed URL
//     const spotifyUrl = e.target.value;
//     const urlParts = spotifyUrl.split("/");
//     const id = urlParts[urlParts.length - 1];
//     const embedUrl = `https://open.spotify.com/embed/track/${id}`; // Change this to 'playlist' for a playlist URL

//     setUrl(embedUrl);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={url}
//         onChange={handleInputChange}
//         placeholder="Paste Spotify URL here"
//       />
//       {url && (
//         <iframe
//           src={url}
//           width="500"
//           height="100"
//           frameBorder="0"
//           allowTransparency="true"
//           allow="encrypted-media"
//           title="Embedded Spotify Player"
//         ></iframe>
//       )}
//     </div>
//   );
// }
//--------___________----------_________________---------------_____
// import React, { useState } from "react";
// import SpotifyWebApi from "spotify-web-api-js";

// const SpotifyPlayer = () => {
//   // Initialize the SpotifyWebApi object using useState hook
//   const [spotifyApi] = useState(new SpotifyWebApi());

//   // Function to play a track
//   const playTrack = (options) => {
//     spotifyApi.play(options, (error, value) => {
//       if (error) {
//         console.error("Error playing track:", error);
//       } else {
//         console.log("Track played successfully:", value);
//       }
//     });
//   };

//   // Function to add an item to the playback queue
//   const addToQueue = (uri, options) => {
//     spotifyApi.queue(uri, options, (error, value) => {
//       if (error) {
//         console.error("Error adding to queue:", error);
//       } else {
//         console.log("Added to queue successfully:", value);
//       }
//     });
//   };

//   // Function to pause playback
//   const pausePlayback = (options) => {
//     spotifyApi.pause(options, (error, value) => {
//       if (error) {
//         console.error("Error pausing playback:", error);
//       } else {
//         console.log("Playback paused successfully:", value);
//       }
//     });
//   };

//   // Function to skip to the next track
//   const skipToNext = (options) => {
//     spotifyApi.skipToNext(options, (error, value) => {
//       if (error) {
//         console.error("Error skipping to next track:", error);
//       } else {
//         console.log("Skipped to next track successfully:", value);
//       }
//     });
//   };

//   // Function to skip to the previous track
//   const skipToPrevious = (options) => {
//     spotifyApi.skipToPrevious(options, (error, value) => {
//       if (error) {
//         console.error("Error skipping to previous track:", error);
//       } else {
//         console.log("Skipped to previous track successfully:", value);
//       }
//     });
//   };

//   // Function to seek to a specific position in the track
//   const seekToPosition = (position_ms, options) => {
//     spotifyApi.seek(position_ms, options, (error, value) => {
//       if (error) {
//         console.error("Error seeking to position:", error);
//       } else {
//         console.log("Seeked to position successfully:", value);
//       }
//     });
//   };

//   // Function to set the repeat mode
//   const setRepeatMode = (state, options) => {
//     spotifyApi.setRepeat(state, options, (error, value) => {
//       if (error) {
//         console.error("Error setting repeat mode:", error);
//       } else {
//         console.log("Repeat mode set successfully:", value);
//       }
//     });
//   };

//   // Function to set the volume
//   const setVolume = (volume_percent, options) => {
//     spotifyApi.setVolume(volume_percent, options, (error, value) => {
//       if (error) {
//         console.error("Error setting volume:", error);
//       } else {
//         console.log("Volume set successfully:", value);
//       }
//     });
//   };

//   // Function to toggle shuffle
//   const toggleShuffle = (state, options) => {
//     spotifyApi.setShuffle(state, options, (error, value) => {
//       if (error) {
//         console.error("Error toggling shuffle:", error);
//       } else {
//         console.log("Shuffle toggled successfully:", value);
//       }
//     });
//   };

//   return (
//     <div>
//       {/* Buttons to trigger different functionalities */}
//       <button onClick={() => playTrack({})}>Play</button>
//       <button onClick={() => addToQueue("track_uri_here", {})}>
//         Add to Queue
//       </button>
//       <button onClick={() => pausePlayback({})}>Pause</button>
//       <button onClick={() => skipToNext({})}>Skip to Next</button>
//       <button onClick={() => skipToPrevious({})}>Skip to Previous</button>
//       <button onClick={() => seekToPosition(5000, {})}>Seek to 5000ms</button>
//       <button onClick={() => setRepeatMode("track", {})}>
//         Set Repeat Mode
//       </button>
//       <button onClick={() => setVolume(50, {})}>Set Volume to 50</button>
//       <button onClick={() => toggleShuffle(true, {})}>Toggle Shuffle</button>
//     </div>
//   );
// };

// export default SpotifyPlayer;

import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const SpotifyPlayer = () => {
  const [spotifyApi] = useState(new SpotifyWebApi());
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to search for tracks or playlists
  const search = (query) => {
    if (query) {
      spotifyApi
        .searchTracks(query)
        .then((data) => {
          setSearchResults(data.tracks.items);
        })
        .catch((err) => {
          console.error("Error searching:", err);
        });
    }
  };

  // Watch for changes in the selected item and play it when selected
  useEffect(() => {
    if (selectedItem) {
      spotifyApi
        .play({ uris: [selectedItem.uri] })
        .then(() => {
          console.log("Item played successfully");
        })
        .catch((err) => {
          console.error("Error playing item:", err);
        });
    }
  }, [selectedItem, spotifyApi]);

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search form submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    search(searchQuery);
  };

  // Handle selection of an item from search results
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a song or playlist"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchResults.map((item) => (
          <li key={item.uri}>
            {item.name} - {item.artists[0].name}
            <button onClick={() => handleSelectItem(item)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyPlayer;
