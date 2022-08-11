import { Fragment } from "react";
import { Header } from "~/components";
import S from "./styles";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <S.Container>{props.children}</S.Container>
    </Fragment>
  );
};

export default Layout;
