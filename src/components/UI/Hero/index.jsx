import S from "./styles";

import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../../utils/assets/profile.png";
import { Col, Container, Row } from "reactstrap";
import SectionSubtitle from "../SectionSubtitle";

const Hero = ({ presentation }) => {
  function calculateYears(year_start, month_start, day_start) {
    var d = new Date(),
      current_year = d.getFullYear(),
      current_month = d.getMonth() + 1,
      current_day = d.getDate(),
      year_start = +year_start,
      month_start = +month_start,
      day_start = +day_start,
      totalYears = current_year - year_start;

    if (
      current_month < month_start ||
      (current_month == month_start && current_day < day_start)
    ) {
      totalYears--;
    }

    return totalYears < 0 ? 0 : totalYears;
  }

  return (
    <S.ContainerHero id="home">
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <S.HeroContent>
              <SectionSubtitle subtitle="Hello" />
              <S.TitleContent className="mt-3 mb-3">
                I&apos;m Julio Filho
              </S.TitleContent>
              <S.Tech className="mb-4">Frontend Engineer</S.Tech>

              <S.SummaryText>{presentation}</S.SummaryText>

              <S.ButtonContent className="mt-5">
                <S.ButtonAboutMe>
                  <Link href="https://bit.ly/juliofilho">Me contatar</Link>
                </S.ButtonAboutMe>

                <S.ButtonDownloadCV>
                  <Link href={`${process.env.url_cv}`}>
                    Download CV
                  </Link>
                </S.ButtonDownloadCV>
              </S.ButtonContent>
            </S.HeroContent>
          </Col>
          <Col lg={6} md={6}>
            <S.HeroImg>
              <Image alt="hero-image" src={HeroImg} width={400} height={400} />

              <S.HeroSkills>
                <S.LabelSkills>Skills</S.LabelSkills>
                <S.BarIcon>
                  {Array(6)
                    .fill(0)
                    .map((item, index) => (
                      <i className="ri-bar-chart-line" key={index}></i>
                    ))}
                </S.BarIcon>
              </S.HeroSkills>

              <S.HeroExperience>
                <S.FlashIcon>
                  <i className="ri-lightbulb-flash-line"></i>
                </S.FlashIcon>

                <S.ContentHeroExperience>
                  <S.LabelExperience>Experiência</S.LabelExperience>
                  <S.LabelYears>
                    +{calculateYears(2015, 2, 6) || 8} anos
                  </S.LabelYears>
                </S.ContentHeroExperience>
              </S.HeroExperience>
            </S.HeroImg>
          </Col>
        </Row>
      </Container>
    </S.ContainerHero>
  );
};

export default Hero;
