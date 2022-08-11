import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { CardPosts } from "~/components";
import SectionSubtitle from "~/components/UI/SectionSubtitle";
import { fetchAPI } from "../../../lib/api";
import S from "./styles";

const Blog = ({ articles }) => {
  const route = useRouter();
  const [mounted, setMounted] = useState(false);

  const goToHome = () => {
    route.push("/");
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <S.ContentPosts>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              {articles.length > 0 && (
                <>
                  <SectionSubtitle subtitle="Meus Posts" />
                  <S.SectionTitlePosts>
                    Confira contéudos de tecnologia
                  </S.SectionTitlePosts>
                </>
              )}
            </Col>

            <S.CardsPosts>
              {articles.map((article, i) => {
                return (
                  <CardPosts article={article} key={article.attributes.slug} />
                );
              })}
            </S.CardsPosts>
            {articles.length < 1 && (
              <S.NotFoundPosts>
                <img src={"/images/404.png"} alt="404" />

                <S.ButtonBack onClick={goToHome}>Voltar para home</S.ButtonBack>
              </S.NotFoundPosts>
            )}
          </Row>
        </Container>
      </S.ContentPosts>
    </>
  );
};

export async function getStaticProps() {
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Blog;
