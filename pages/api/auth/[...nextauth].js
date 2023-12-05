import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";

export const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
};

export default NextAuth(options);
