import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";
import ServicesItem from "../ServicesItem";
import S from "./styles";

const Services = () => {
  return (
    <Container style={{ gap: 8 }}>
      <Row>
        <Col lg={6} md={6}>
          <S.ServicesContainer>
            <S.SectionServices>
              <ServicesItem title="Web Development" icon="ri-computer-line" />

              <ServicesItem title="App Development" icon="ri-apps-line" />
            </S.SectionServices>

            <ServicesItem
              title="Full-Stack Development"
              icon="ri-code-s-slash-line"
            />
          </S.ServicesContainer>
        </Col>

        <Col lg={6} md={6}>
          <SectionSubtitle subtitle="O que eu faço" />

          <S.SkillsAddOn className="mb-1 mt-4">
            Microfrontend/Monorepo
          </S.SkillsAddOn>
          <S.SkillsAddOn className="mb-4">
           Sass/Marketplaces
          </S.SkillsAddOn>

          <S.MyProfileDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolorum magni nam? Reprehenderit consequuntur culpa nostrum delectus
            earum. Alias deserunt iure aspernatur laboriosam necessitatibus
            doloribus dolorem commodi, iste quasi repellendus?
          </S.MyProfileDescription>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
