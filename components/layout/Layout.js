import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Link from "next/link";
import styled from "styled-components";

const FixedLink = styled(Link)`
  position: fixed;
  bottom: 110px;
  right: 20px;
  font-weight: bold;
  border: 2px solid black;
  background-color: black;
  color: rgb(249, 222, 176);
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>wæv</title>
        <link rel="icon" href="/fakelogo.png" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Link href={"/new-post"} passHref legacyBehavior>
        <FixedLink>create post</FixedLink>
      </Link>
      <Footer />
    </>
  );
}
