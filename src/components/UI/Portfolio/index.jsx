import S from "./styles";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";
import portfolio from "~/utils/data/portfolio";
import PortfolioItem from "../PortfolioItem";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("Web App");
  const [data, setData] = useState([]);

  const active = "button-mobile-app";

  useEffect(() => {
    if (filter === "Web App" || filter === "Mobile App") {
      const filteredData = portfolio.filter(
        ({ category }) => category === filter
      );

      setData(filteredData);
      return;
    }
    return setData(portfolio);
  }, [filter]);

  return (
    <S.ContainerPortfolio id="portfolio">
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <SectionSubtitle subtitle="Meu Portifólio" />
            <S.Works>Alguns dos jobs que desenvolvi</S.Works>
          </Col>

          <Col lg={6} md={6}>
            <S.ContainerButton>
              <S.ButtonMobileApp
                className={`${filter === "Web App" && active} secondary-btn`}
                onClick={() => setFilter("Web App")}
              >
                Web App
              </S.ButtonMobileApp>
              <S.ButtonMobileApp
                className={`${filter === "Mobile App" && active} secondary-btn`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App
              </S.ButtonMobileApp>
            </S.ContainerButton>
          </Col>

          {data?.map((item) => (
            <Col lg={4} sm="6" md={4} key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </S.ContainerPortfolio>
  );
};

export default Portfolio;
