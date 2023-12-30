import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import network from "public/images/Connectedworld.png";
import Image from "next/image";
import SectionSubtitle from "../SectionSubtitle";
import Slider from "react-slick";
import { slide } from "~/utils";

const Study = ({ studies }) => {
  return (
    <S.ContainerStudy id="study">
      <Container>
        <Row>
          <Col lg={6} md={6} className="testimonial_img">
            <Image alt="" src={network} width={400} height={400} />
          </Col>

          <Col lg={6} md={6}>
            <S.TopContent>
              <SectionSubtitle subtitle="Estudos" />
              <S.TitleClients>Alguns dos Cursos que eu fiz</S.TitleClients>
            </S.TopContent>

            <Slider {...slide}>
              {studies.map(
                ({
                  id,
                  img,
                  school_name,
                  course_category,
                  customer_opinion,
                }) => (
                  <S.StudyItem key={id}>
                    <S.StudyClient>
                      <Image alt="cursos" src={img} width={50} height={50} />

                      <S.ContainerLabels>
                        <S.ClientName>{school_name}</S.ClientName>
                        <S.CustomerCharge>{course_category}</S.CustomerCharge>
                      </S.ContainerLabels>
                    </S.StudyClient>
                    <S.CustomerOpinion>{customer_opinion}</S.CustomerOpinion>
                  </S.StudyItem>
                )
              )}
            </Slider>
          </Col>
        </Row>
      </Container>
    </S.ContainerStudy>
  );
};

export default Study;
