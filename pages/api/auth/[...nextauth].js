import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  secret: process.env.SECRET,
};

export default NextAuth(options);

// import NextAuth from "next-auth";
// import SpotifyProvider from "next-auth/providers/spotify";
// import { MongoClient } from "mongodb";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";

// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export default NextAuth({
//   providers: [
//     SpotifyProvider({
//       clientId: process.env.SPOTIFY_CLIENT_ID,
//       clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
//     }),
//   ],
//   adapter: MongoDBAdapter({
//     db: await client.connect().then(() => client.db("your_db_name")),
//   }),
//   callbacks: {
//     async session({ session, user }) {
//       session.user.userId = user.id;
//       session.user.admin = user.admin;

//       return session;
//     },
//   },
// });
