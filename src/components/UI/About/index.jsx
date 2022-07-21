import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";
import Link from "next/link";

const About = (aboutProps) => {
  const { skills, aboutme } = aboutProps;
  const { about, aboutImgCard1, aboutImgCard2 } = aboutme;

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

          <Col md={6} >
            <S.AboutImg>
              <S.About className="d-flex flex-column mb-3">
                {aboutImgCard1.map(({ id, path }) => (
                  <S.ContainerImg key={id}>
                    <S.Image src={path} alt="about-img" width={100} height={100} />
                  </S.ContainerImg>
                ))}
              </S.About>

              <S.About className="d-flex flex-column mb-3">
                {aboutImgCard2.map(({ id, path }) => (
                  <S.ContainerImg key={id}>
                    <S.Image src={path} alt="about-img" />
                  </S.ContainerImg>
                ))}
              </S.About>
            </S.AboutImg>
          </Col>
        </Row>
      </Container>
    </S.SectionAbout>
  );
};

export default About;
