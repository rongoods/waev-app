import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Providers from "../providers/providers";

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
  z-index: 4999;
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
      <Providers>
        <main>{children}</main>
      </Providers>

      <section className="bg-image">
        <Image
          src="/wireframe-waev.jpeg"
          alt="background-wave"
          layout="fill"
          objectFit="cover"
          //   style={{ objectFit: "contain" }}
        />
      </section>
      <FixedLink href={"/create"}>create post</FixedLink>

      <Footer />
    </>
  );
}
