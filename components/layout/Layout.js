import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Link from "next/link";
import styled from "styled-components";

const FixedLink = styled(Link)`
  position: fixed;
  bottom: 100px;
  right: 20px;
  border: 2px solid white;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 1px;
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
