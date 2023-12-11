import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "../components/layout/Layout.js";
import { ThemeProvider } from "next-themes";

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
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </SWRConfig>
    </SessionProvider>
  );
}
