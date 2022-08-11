import S from "./styles";

import { colors } from "~/styles";
import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";
import myPhoto from "~/../public/images/hero.jpeg";

import moment from "moment";
import { Container } from "reactstrap";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Post = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  return (
    <S.ContainerPost
      categories={categories.data}
      style={{ background: colors["background-azul/primary-base"] }}
    >
      <Container>
        {article && (
          <>
            <S.Top
              id="banner"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <S.LogoPost src={imageUrl} />
              <S.PostTitle>{article.attributes.title}</S.PostTitle>

              <S.Author>
                <Image src={myPhoto} alt="Autor" width={40} height={40} />
                {/* Julio Filho */}
                <S.CreatedAt>
                  {moment(article.attributes.published_at).format("l")}
                </S.CreatedAt>
              </S.Author>
            </S.Top>
            <S.ContentPost>
              <ReactMarkdown
                source={article.attributes.content}
                escapeHtml={false}
                className="markdown-blog"
              />
            </S.ContentPost>
          </>
        )}
      </Container>
    </S.ContainerPost>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Post;
