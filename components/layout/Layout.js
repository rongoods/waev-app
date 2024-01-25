import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Providers from "../providers/Providers";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const FixedLink = styled(Link)`
  position: fixed;
  bottom: 100px;
  right: 20px;
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 1px;
  text-decoration: none;
  z-index: 4999;
`;

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState(
    "/wireframe-waev.jpeg"
  );

  useEffect(() => {
    setBackgroundImage(
      theme === "light" ? "/wireframe-waev.jpeg" : "/IMG_2360.JPG"
    );
  }, [theme]);

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
        <section
          className="bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></section>
        <FixedLink href={"/create"}>create post</FixedLink>

        <Footer />
      </Providers>
    </>
  );
}
