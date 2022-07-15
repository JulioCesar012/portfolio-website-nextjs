import { Fragment } from "react";
import S from "./styles";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <S.Container>{props.children}</S.Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
