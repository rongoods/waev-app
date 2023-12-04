// import TitleBar from "../testTitleBar/TitleBar";
// import styled from "styled-components";
// import Head from "next/head.js";

// const Main = styled.main`
//   display: grid;
//   gap: 0.5rem;
//   margin-top: 5rem;
//   padding: 0.5rem;
//   position: relative;
//   width: 100%;
// `;

// export default function Layout({ children }) {
//   return (
//     <>
//       <Head>
//         <title>Tourio</title>
//       </Head>
//       <TitleBar />
//       <Main>{children}</Main>
//     </>
//   );
// }

import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Link from "next/link";
import styled from "styled-components";

const FixedLink = styled(Link)`
  position: fixed;
  bottom: 100px;
  right: 20px;
  border: 2px solid black;
  background-color: black;
  color: rgb(249, 222, 176);
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
  z-index: 9999;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>wæv</title>
        <link rel="icon" href="/fakelogo.png" />
      </Head>
      <Nav />
      <br></br>
      <main>{children}</main>
      <FixedLink href={"/create"}>create post</FixedLink>

      <Footer />
    </>
  );
}
