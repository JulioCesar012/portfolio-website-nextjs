import S from "./styles";

import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NAV_LINK } from "~/utils";

const Footer = () => {
  const date = new Date();
  const dateCopyright = date.getFullYear();

  return (
    <S.Footer>
    <Container>
      <Row>
        <Col lg={6} className="footer_top">
          <S.NavMenu>
            {NAV_LINK.map((item, index) => (
              <Link href={`${item.path}`} key={index}>
                {item.display}
              </Link>
            ))}
          </S.NavMenu>
        </Col>

        <Col lg={6} className="footer_top">
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
