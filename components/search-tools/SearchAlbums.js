import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./SearchAlbums.module.css";
import { useTheme } from "next-themes";

export default function SearchAlbums() {
  const CLIENT_ID = "680c00e1f7a843b4b611679f5a56b0d8";
  const REDIRECT_URI = "http://localhost:3000/playlist";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [albums, setAlbums] = useState([]);
  const { theme, setTheme } = useTheme();

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

  const resetSearch = () => {
    setSearchKey("");
    setAlbums([]);
  };

  async function searchAlbums(event) {
    event.preventDefault();

    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "album",
      },
    });
    setAlbums(data.albums.items);
  }
  console.log(token);
  const renderAlbums = () => {
    return albums.map((album) => (
      <div key={album.id} className={styles.searchedparent}>
        {album.images.length ? (
          <Image
            src={album.images[0].url}
            alt=""
            width={125}
            height={125}
            className={styles.div}
          />
        ) : (
          <div>no image</div>
        )}
        {album.name}
      </div>
    ));
  };

  return (
    <div className={styles.formInput}>
      <h1 className={styles.formLabel}>search albums</h1>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          login to spotify
        </a>
      ) : (
        <button onClick={logout} className={styles.button}>
          logout
        </button>
      )}

      {token ? (
        <form onSubmit={searchAlbums}>
          <input
            type="text"
            required="true"
            onChange={(event) => setSearchKey(event.target.value)}
            className={styles.inputField}
          />
          <button type={"submit"} className={styles.button}>
            search
          </button>
          <button type="button" className={styles.button} onClick={resetSearch}>
            clear
          </button>
        </form>
      ) : (
        <h2>please login</h2>
      )}
      <div className={styles.searchedchild}>{renderAlbums()}</div>
    </div>
  );
}
