import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import network from "public/images/Connectedworld.png";
import Image from "next/image";
import SectionSubtitle from "../SectionSubtitle";
import Slider from "react-slick";
import { settings } from "~/utils";

const Testimonial = ({ clients }) => {
  return (
    <S.ContainerTestimonial id="feedbacks">
      <Container>
        <Row>
          <Col lg={6} md={6} className="testimonial_img">
            <Image alt="" src={network} width={400} height={400} />
          </Col>

          <Col lg={6} md={6}>
            <SectionSubtitle subtitle="Feedbacks" />
            <S.TitleClients>O que clientes dizem sobre mim</S.TitleClients>

            <Slider {...settings}>
              {clients.map(
                ({
                  id,
                  img,
                  client_name,
                  customer_charge,
                  customer_opinion,
                }) => (
                  <S.TestimonialItem key={id}>
                    <S.TestimonialClient>
                      <Image
                        alt="client-img"
                        src={img}
                        width={50}
                        height={50}
                      />

                      <S.ContainerLabels>
                        <S.ClientName>{client_name}</S.ClientName>
                        <S.CustomerCharge>{customer_charge}</S.CustomerCharge>
                      </S.ContainerLabels>
                    </S.TestimonialClient>
                    <S.CustomerOpinion>{customer_opinion}</S.CustomerOpinion>
                  </S.TestimonialItem>
                )
              )}
            </Slider>
          </Col>
        </Row>
      </Container>
    </S.ContainerTestimonial>
  );
};

export default Testimonial;
