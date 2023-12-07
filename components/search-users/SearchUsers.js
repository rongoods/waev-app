import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchUserById() {
  const CLIENT_ID = "680c00e1f7a843b4b611679f5a56b0d8";
  const REDIRECT_URI = "http://localhost:3000/playlist";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

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

  async function searchUserById(event) {
    event.preventDefault();

    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  return (
    <div>
      <h1>Search Spotify User by ID</h1>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      {token ? (
        <form onSubmit={searchUserById}>
          <input
            type="text"
            required={true}
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
            placeholder="Enter User ID"
          />
          <button type="submit">Search</button>
        </form>
      ) : (
        <h2>Please login</h2>
      )}

      {userData && (
        <div>
          <h2>User Details</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function SearchUsers() {
//   const CLIENT_ID = "680c00e1f7a843b4b611679f5a56b0d8";
//   const REDIRECT_URI = "http://localhost:3000/playlist";
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//   const RESPONSE_TYPE = "token";

//   const [token, setToken] = useState("");
//   const [searchKey, setSearchKey] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const hash = window.location.hash;
//     let token = window.localStorage.getItem("token");

//     if (!token && hash) {
//       token = hash
//         .substring(1)
//         .split("&")
//         .find((element) => element.startsWith("access_token"))
//         .split("=")[1];

//       window.location.hash = "";
//       window.localStorage.setItem("token", token);
//     }
//     setToken(token);
//   }, []);

//   const logout = () => {
//     setToken("");
//     window.localStorage.removeItem("token");
//   };

//   async function searchUsers(event) {
//     event.preventDefault();

//     const { data } = await axios.get("https://api.spotify.com/v1/users", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: {
//         q: searchKey,
//         type: "user",
//       },
//     });
//     setUsers(data.users.items);
//   }

//   const renderUsers = () => {
//     return users.map((user) => <div key={user.id}>{user.display_name}</div>);
//   };

//   return (
//     <div>
//       <h1>Search Spotify Users</h1>
//       {!token ? (
//         <a
//           href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
//         >
//           Login to Spotify
//         </a>
//       ) : (
//         <button onClick={logout}>Logout</button>
//       )}

//       {token ? (
//         <form onSubmit={searchUsers}>
//           <input
//             type="text"
//             required={true}
//             onChange={(event) => setSearchKey(event.target.value)}
//           />
//           <button type="submit">Search</button>
//         </form>
//       ) : (
//         <h2>Please login</h2>
//       )}
//       <div>{renderUsers()}</div>
//     </div>
//   );
// }
