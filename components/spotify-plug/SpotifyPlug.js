export default function SpotifyPlug() {
  const CLIENT_ID = "680c00e1f7a843b4b611679f5a56b0d8";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div>
      <h1>spotify plug</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        login to spotify
      </a>
    </div>
  );
}
