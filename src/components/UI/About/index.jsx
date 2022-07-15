import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";
import Link from "next/link";
import Image from "next/image";

import img1 from '~/assets/images/img-01.jpg';
import img2 from '~/assets/images/img-02.jpg';
import img3 from '~/assets/images/img-03.jpg';
import img4 from '~/assets/images/hero.jpeg';

const About = ({ skills, about }) => {
  return (
    <S.SectionAbout>
      <Container>
        <Row>
          <Col lg={6} md={6}>
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

         <Col md={6} lg={6}>
          <S.AboutImg>
              <S.About className="d-flex flex-column mb-3">
                <S.ContainerImg>
                  <Image src={img1} alt="about-img" />
                </S.ContainerImg>

                <S.ContainerImg>
                  <Image src={img2} alt="about-img" />
                </S.ContainerImg>
              </S.About>

              <S.About className="d-flex flex-column mb-3">
                <S.ContainerImg>
                  <Image src={img3} alt="about-img" />
                </S.ContainerImg>

                <S.ContainerImg>
                  <Image src={img4} alt="about-img" />
                </S.ContainerImg>
              </S.About>
          </S.AboutImg>
         </Col>
        </Row>
      </Container>
    </S.SectionAbout>
  );
};

export default About;
