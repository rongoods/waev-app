import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "../components/testLayout/Layout.js";

export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}
