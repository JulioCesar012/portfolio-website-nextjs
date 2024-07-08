import { Fragment } from "react";
import { Footer, Header } from "~/components";
import S from "./styles";

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
