import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import SectionSubtitle from "../SectionSubtitle";
import PortfolioItem from "../PortfolioItem";

import portfolio from "~/utils/data/portfolio";
import { useWindowDimensions } from "~/hooks/useWindowDimension";

import S from "./styles";
import { _resizeColumn } from "~/hooks/_resizeColumn";

const Portfolio = () => {
  const { width } = useWindowDimensions();

  const [filter, setFilter] = useState("Web App");
  const [data, setData] = useState([]);
  const [columnWidth, setColumnWidth] = useState(4);
  const [columnSM, setColumnSM] = useState(6);

  const active = "button-mobile-app";

  useEffect(() => {
    if (filter) {
      const filteredData = portfolio.filter(
        ({ category }) => category === filter
      );

      setData(filteredData);
      return;
    }
  }, [filter]);

  useEffect(() => {
    _resizeColumn(width, setColumnWidth, setColumnSM);
  }, [width, columnWidth, columnSM]);

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
            <Col lg={columnWidth} sm={columnSM} md={columnWidth} key={item.id}>
              <PortfolioItem {...{ item }} />
            </Col>
          ))}
        </Row>
      </Container>
    </S.ContainerPortfolio>
  );
};

export default Portfolio;
