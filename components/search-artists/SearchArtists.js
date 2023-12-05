import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./SearchArtists.module.css";

export default function SearchArtists() {
  const CLIENT_ID = "680c00e1f7a843b4b611679f5a56b0d8";
  const REDIRECT_URI = "http://localhost:3000/playlist";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  async function searchArtists(event) {
    event.preventDefault();

    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtist(data.artists.items);
  }

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <Image
            src={artist.images[0].url}
            alt=""
            width={200}
            height={200}
            className={styles.div}
          />
        ) : (
          <div>no image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div>
      <h1>search artist</h1>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          login to spotify
        </a>
      ) : (
        <button onClick={logout}>logout</button>
      )}

      {token ? (
        <form onSubmit={searchArtists}>
          <input
            type="text"
            required="true"
            onChange={(event) => setSearchKey(event.target.value)}
          />
          <button type={"submit"}>search</button>
        </form>
      ) : (
        <h2>please login</h2>
      )}
      {renderArtists()}
    </div>
  );
}
