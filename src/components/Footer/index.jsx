import S from "./styles";

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const NAV_LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const dateCopyright = date.getFullYear();

  return (
    <S.Footer>
    <Container>
      <Row>
        <Col lg={6}>
          <S.NavMenu>
            {NAV_LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}
          </S.NavMenu>
        </Col>

        <Col lg={6}>
          <S.FooterCreator>
            <S.WebsiteCreator>Created by Julio F.</S.WebsiteCreator>
          </S.FooterCreator>
        </Col>

        <Col lg={12}>
          <S.FooterCopyright>
            <S.Label>
              &copy; Copyright {dateCopyright} - Developed by Julio Filho. All
              right reserved
            </S.Label>
          </S.FooterCopyright>
        </Col>
      </Row>
    </Container>
    </S.Footer>
  );
};

export default Footer;
