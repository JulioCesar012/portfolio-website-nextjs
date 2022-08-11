import moment from "moment";
import { useRouter } from "next/router";
import { Image } from "~/utils";
import S from "./styles";

const CardPosts = ({ article }) => {
  const router = useRouter();

  const goToPost = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <S.ContentCardPosts onClick={() => goToPost(article.attributes.slug)}>
      <S.PostImage>
        <Image image={article.attributes.image} />
      </S.PostImage>

      <S.PostTitle>
        <S.Title>{article.attributes.title}</S.Title>
      </S.PostTitle>

      <S.DescriptionSumary>
        {article.attributes.description}
      </S.DescriptionSumary>
    </S.ContentCardPosts>
  );
};

export default CardPosts;
