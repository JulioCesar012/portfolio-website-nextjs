import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "~/components/Layout";

import "~/styles/_fonts.css";
import GlobalStyle from "~/styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
