// import styled from "styled-components";
// import Card from "../components/testCard/Card";
// import useSWR from "swr";
// import Link from "next/link.js";
// import { StyledLink } from "../components/testStyledLink/StyledLink.js";
// below is the test

import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

// const List = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   padding-left: 0;
// `;

// const ListItem = styled.li`
//   position: relative;
//   width: 100%;

//   &:first-child {
//     padding-top: 35px;
//   }

//   &:last-child {
//     padding-bottom: 80px;
//   }
// `;

// const FixedLink = styled(StyledLink)`
//   position: fixed;
//   bottom: 50px;
//   right: 50px;
// `;
// export default function Home() {
//   const { data } = useSWR("/api/posts", { fallbackData: [] });
//   return (
//     <>
//       <List role="list">
//         {data.map((post) => {
//           return (
//             <ListItem key={post.id}>
//               <Card
//                 title={post.title}
//                 content={post.content}
//                 id={`${post._id.$oid ?? post._id}`}
//               />
//             </ListItem>
//           );
//         })}
//       </List>
//     </>
//   );
// }

export default function Home() {
  const session = useSession();

  return (
    <div>
      <Head>
        <title>NextAuth.js Spotify example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          hey,{" "}
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
              style={{ "--accent-color": "#15883e" }}
              onClick={() => signIn("spotify")}
              disabled={session.status === "loading"}
            >
              Sign in with Spotify
            </button>
          )}
        </p>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
