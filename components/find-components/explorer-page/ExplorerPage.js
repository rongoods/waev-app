import React, { useState, useEffect } from "react";
import Dropdown from "../dropdown/Dropdown";
import Listbox from "../listbox/Listbox";
import Detail from "../detail/Detail";
import { Credentials } from "../credentials/Credentials";
import axios from "axios";
import styles from "./ExplorerPage.module.css";
import PlaySong from "@/components/play-song/PlaySong";

const App = () => {
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  const [trackDetail, setTrackDetail] = useState(null);
  const [hoveredTrack, setHoveredTrack] = useState(null);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });
    });
  };

  const playlistChanged = (val) => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const buttonClicked = (e) => {
    e.preventDefault();

    axios(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((tracksResponse) => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    });
  };

  const listboxClicked = (val) => {
    const currentTracks = [...tracks.listOfTracksFromAPI];

    const selectedTrack = currentTracks.find((t) => t.track.id === val);

    if (selectedTrack) {
      const { track } = selectedTrack;
      const trackDetailWithImage = {
        ...track,
        image: track.album.images.length > 0 ? track.album.images[0].url : null,
      };

      setTrackDetail(trackDetailWithImage);
    }
  };

  const handleTrackHover = (trackId) => {
    setHoveredTrack(trackId);
  };

  return (
    <div className={styles.formInput}>
      <form onSubmit={buttonClicked}>
        <Dropdown
          label="Genre :"
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
          className={styles.dropdown}
        />
        <Dropdown
          label="Playlist :"
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged}
          className={styles.dropdown}
        />
        <div className="col-sm-6 row form-group px-0">
          <button type="submit" className="btn btn-success col-sm-12">
            Search
          </button>
        </div>
        <div className="row">
          <Listbox
            items={tracks.listOfTracksFromAPI}
            clicked={listboxClicked}
            handleTrackHover={handleTrackHover}
          />
          {trackDetail && (
            <Detail
              image={trackDetail.image}
              name={trackDetail.name}
              artists={trackDetail.artists}
            />
          )}
        </div>
      </form>
      {/* <PlaySong trackId={selectedTrackId} accessToken={userAccessToken} /> */}
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import Dropdown from "../dropdown/Dropdown";
// import Listbox from "../listbox/Listbox";
// import Detail from "../detail/Detail";
// import { Credentials } from "../credentials/Credentials";
// import axios from "axios";
// import styles from "./ExplorerPage.module.css";
// import PlaySong from "@/components/play-song/PlaySong";

// const App = () => {
//   const spotify = Credentials();

//   const [token, setToken] = useState("");
//   const [genres, setGenres] = useState({
//     selectedGenre: "",
//     listOfGenresFromAPI: [],
//   });
//   const [playlist, setPlaylist] = useState({
//     selectedPlaylist: "",
//     listOfPlaylistFromAPI: [],
//   });
//   const [tracks, setTracks] = useState({
//     selectedTrack: "",
//     listOfTracksFromAPI: [],
//   });
//   const [trackDetail, setTrackDetail] = useState(null);
//   const [hoveredTrack, setHoveredTrack] = useState(null);

//   useEffect(() => {
//     axios("https://accounts.spotify.com/api/token", {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization:
//           "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
//       },
//       data: "grant_type=client_credentials",
//       method: "POST",
//     }).then((tokenResponse) => {
//       setToken(tokenResponse.data.access_token);

//       axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
//         method: "GET",
//         headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
//       }).then((genreResponse) => {
//         setGenres({
//           selectedGenre: genres.selectedGenre,
//           listOfGenresFromAPI: genreResponse.data.categories.items,
//         });
//       });
//     });
//   }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

//   const genreChanged = (val) => {
//     setGenres({
//       selectedGenre: val,
//       listOfGenresFromAPI: genres.listOfGenresFromAPI,
//     });

//     axios(
//       `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
//       {
//         method: "GET",
//         headers: { Authorization: "Bearer " + token },
//       }
//     ).then((playlistResponse) => {
//       setPlaylist({
//         selectedPlaylist: playlist.selectedPlaylist,
//         listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
//       });
//     });
//   };

//   const playlistChanged = (val) => {
//     setPlaylist({
//       selectedPlaylist: val,
//       listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
//     });
//   };

//   const buttonClicked = (e) => {
//     e.preventDefault();

//     axios(
//       `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     ).then((tracksResponse) => {
//       setTracks({
//         selectedTrack: tracks.selectedTrack,
//         listOfTracksFromAPI: tracksResponse.data.items,
//       });
//     });
//   };

//   const listboxClicked = (val) => {
//     const currentTracks = [...tracks.listOfTracksFromAPI];

//     const selectedTrack = currentTracks.find((t) => t.track.id === val);

//     if (selectedTrack) {
//       const { track } = selectedTrack;
//       const trackDetailWithImage = {
//         ...track,
//         image: track.album.images.length > 0 ? track.album.images[0].url : null,
//       };

//       setTrackDetail(trackDetailWithImage);
//     }
//   };

//   const handleTrackHover = (trackId) => {
//     setHoveredTrack(trackId);
//   };

//   return (
//     <div className={styles.formInput}>
//       <form onSubmit={buttonClicked}>
//         <Dropdown
//           label="Genre :"
//           options={genres.listOfGenresFromAPI}
//           selectedValue={genres.selectedGenre}
//           changed={genreChanged}
//           className={styles.dropdown}
//         />
//         <Dropdown
//           label="Playlist :"
//           options={playlist.listOfPlaylistFromAPI}
//           selectedValue={playlist.selectedPlaylist}
//           changed={playlistChanged}
//           className={styles.dropdown}
//         />
//         <div className="col-sm-6 row form-group px-0">
//           <button type="submit" className="btn btn-success col-sm-12">
//             Search
//           </button>
//         </div>
//         <div className="row">
//           <Listbox
//             items={tracks.listOfTracksFromAPI}
//             clicked={listboxClicked}
//             handleTrackHover={handleTrackHover}
//           />
//           {trackDetail && (
//             <Detail
//               image={trackDetail.image}
//               name={trackDetail.name}
//               artists={trackDetail.artists}
//             />
//           )}
//         </div>
//       </form>
//       <PlaySong trackId={selectedTrackId} accessToken={userAccessToken} />
//     </div>
//   );
// };

// export default App;
