import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";
import Link from "next/link";
import Form from "../Form";

const Contact = () => {
  return (
    <S.SectionContact>
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <SectionSubtitle subtitle="Entre em contato" />
            <S.TitleContact>Entre em contato comigo</S.TitleContact>
            <S.DescriptionContact>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil in
              eum dolores. Non laborum harum fugiat dolor voluptates cum ut
              eaque dolorum perspiciatis laudantium quod quo nulla nostrum,
              alias atque.
              </S.DescriptionContact>
              <S.ContactIcons>
                <S.Icon>
                  <S.ContentIcons>
                    <i className="ri-map-pin-line"></i>
                  </S.ContentIcons>
                  <S.InfoContact>Ubatuba - SP, Brasil</S.InfoContact>
                </S.Icon>

                <S.Icon>
                  <S.ContentIcons>
                    <i className="ri-mail-line"></i>
                  </S.ContentIcons>
                  <S.InfoContact>rodriguesjuliocesar145@gmail.com</S.InfoContact>
                </S.Icon>

                <S.Icon>
                  <S.ContentIcons>
                    <i className="ri-phone-line"></i>
                  </S.ContentIcons>
                  <S.InfoContact>+55 (12)99709-5524</S.InfoContact>
                </S.Icon>
              </S.ContactIcons>

              <S.SocialLinks>
                <Link
                 href="#"><i className="ri-youtube-line"></i></Link>
                <Link href="#"><i className="ri-github-line"></i></Link>
                <Link href="#"><i className="ri-linkedin-line"></i></Link>
                <Link href="#"><i className="ri-discord-line"></i></Link>
                <Link href="#"><i className="ri-medium-line"></i></Link>
              </S.SocialLinks>
          </Col>

          <Col lg={6} md={6}>
            <Form />
          </Col>
        </Row>
      </Container>
    </S.SectionContact>
  );
};

export default Contact;
