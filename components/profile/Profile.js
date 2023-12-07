import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return (
    <>
      <h1>
        hey,
        {session.status === "authenticated"
          ? session.data.user?.name || "friend"
          : "stranger"}
        !
      </h1>
      <p>
        {session.status === "authenticated" ? (
          <button type="button" onClick={() => signOut()}>
            Sign out {session.data.user?.email}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => signIn("spotify")}
            disabled={session.status === "loading"}
          >
            Sign in with Spotify
          </button>
        )}
      </p>
    </>
  );
}
