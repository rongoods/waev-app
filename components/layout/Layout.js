import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Link from "next/link";
import styled from "styled-components";

const FixedLink = styled(Link)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-weight: bold;
  border: 1px solid black;
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
      <Link href={"/CreatePostForm"} passHref legacyBehavior>
        <FixedLink>+ post</FixedLink>
      </Link>
      <Footer />
    </>
  );
}
