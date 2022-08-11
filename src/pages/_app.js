import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "~/components/Layout";

import "~/styles/_fonts.css";
import { fetchAPI } from "lib/api";
import GlobalStyle from "~/styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  }).catch(() => {
    return { ...appProps };
  });
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
