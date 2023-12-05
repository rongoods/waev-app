import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

// export default function App({ Component, pageProps: { ...pageProps } }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

//below is all test from tourio app

import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import Layout from "../components/testLayout/Layout.js";

export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      {" "}
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
