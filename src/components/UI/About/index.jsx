import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";
import Link from "next/link";
import { slide_portifolio } from "~/utils/common";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const About = (aboutProps) => {
  const { skills, aboutme } = aboutProps;
  const { about, aboutImgCard } = aboutme;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.addEventListener("resize", setIsMobile(true));
      return;
    }
    return setIsMobile(false);
  }, [window]);

  return (
    <S.SectionAbout id="about">
      <Container>
        <Row>
          <Col lg={6} className="about_content mb-5">
            <SectionSubtitle subtitle="Sobre mim" />
            <S.Label>Estou aqui</S.Label>
            <S.Label className="mb-4">
              pra te ajudar no seu próximo projeto
            </S.Label>
            <S.DescriptionAboutMe>{about}</S.DescriptionAboutMe>

            <S.ContainerSkills>
              {skills.map(({ id, skill }) => {
                return (
                  <S.Skills key={id}>
                    <S.LabelSkill>
                      <S.Icon>
                        <i className="ri-checkbox-circle-line"></i>
                      </S.Icon>
                      {skill}
                    </S.LabelSkill>
                  </S.Skills>
                );
              })}
            </S.ContainerSkills>

            <S.Portfolio>
              <S.PortfolioButton className="primary-btn">
                <Link href="#portfolio">Meu portifólio</Link>
              </S.PortfolioButton>
            </S.Portfolio>
          </Col>

          <Col lg={6}>
            <S.AboutImg>
              <Slider
                slidesToShow={isMobile ? 2 : 3}
                slidesToScroll={isMobile ? 2 : 3}
                {...slide_portifolio}
              >
                {aboutImgCard.map(({ id, path }) => (
                  <S.ContainerImg key={id}>
                    <S.Image
                      src={path}
                      alt="about-img"
                    />
                  </S.ContainerImg>
                ))}
              </Slider>
            </S.AboutImg>
          </Col>
        </Row>
      </Container>
    </S.SectionAbout>
  );
};

export default About;
