import Head from "next/head";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>wæv</title>
        <link rel="icon" href="/fakelogo.png" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
