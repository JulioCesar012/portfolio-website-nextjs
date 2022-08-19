import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "~/components/Layout";

import "~/styles/_fonts.css";
import GlobalStyle from "~/styles/Global";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <title>Developer Julio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
