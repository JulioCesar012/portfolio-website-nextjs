import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'reactstrap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Skeleton from 'react-loading-skeleton';

import { categories } from './data';
import S, { skeletonTitle, skeletonThumb } from './styles';

function Blog() {
  const router = useRouter();
  const BLOG_ID = process.env.NEXT_BLOG_ID; // Seu Blog ID
  const API_KEY = process.env.NEXT_API_KEY_BLOGGER; // Sua chave de API
  const POSTS_API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

  const redirectToPost = (postId) => {
    router.push(`/blog/${postId}`);
  };

  useEffect(() => {
    document.title = 'Dev.Julio - Blog';
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true); // Inicia o carregamento
        const response = await fetch(POSTS_API_URL);
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        setIsLoading(false); // Finaliza o carregamento
        console.error('Erro ao buscar posts do Blogger:', error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento
      }
    };

    fetchPosts();
  }, []);

  const extractImageURL = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const imgTag = doc.querySelector('img');
    return imgTag ? imgTag.src : null;
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return { truncated: false, text };
    }
    return { truncated: true, text: text.slice(0, maxLength) + '...' };
  };
  
  const notHasPosts = !isLoading && !posts?.length;

  return (
    <Container>
      <S.HeaderCategory>
        {/* {categories?.map((category, index) => (
          <S.Category
            key={category.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            hovered={hoveredIndex === index}
          >
            {category.label.split('').map((char, charIndex) => (
              <S.AnimationLetter
                key={charIndex}
                delay={`${charIndex * 0.1}s`}
                hovered={hoveredIndex === index}
              >
                {char}
              </S.AnimationLetter>
            ))}
          </S.Category>
        ))} */}
        <S.TitlePosts>Meus Artigos</S.TitlePosts>
      </S.HeaderCategory>

      <S.Content style={{ justifyContent: notHasPosts && 'center', paddingTop: notHasPosts && '0px' }}>
        {isLoading && (
          <>
            {Array.from({ length: 6 }, (_, index) => (
              <S.PostCard key={index}>
                <Skeleton style={skeletonThumb} />

                <Skeleton style={skeletonTitle} />
              </S.PostCard>
            ))}
          </>
        )}

        {!isLoading && !posts?.length && (
          <S.NotFoundPost>
            <img src={'/images/logo_site.png'} alt="Dev. Julio" />
            <h2>Nenhum artigo publicado</h2>

            <a href={'/'}>Volte para a página principal</a>
          </S.NotFoundPost>
        )}

        {!isLoading &&
          posts?.map((post) => {
            const { truncated, text } = truncateText(post.title, 45);

            return (
              <S.PostCard
                key={post?.id}
                onClick={() => redirectToPost(post?.id)}
              >
                <>
                  {extractImageURL(post.content) && (
                    <S.PostImage
                      src={extractImageURL(post.content)}
                      alt={post.title}
                    />
                  )}
                </>
                <S.PostTitle
                  data-tooltip-id={post?.title}
                  data-tooltip-content={post?.title}
                >
                  {text}
                </S.PostTitle>
                {truncated && (
                  <ReactTooltip id={post?.title} place="top" effect="solid" />
                )}

                {/* <S.PostTitle>{truncateText(post.title, 10)}</S.PostTitle> */}
                {/* Renderiza o conteúdo sem a imagem */}
                {/* <S.PreviewContent>{parse(post.content)}</S.PreviewContent> */}
                {/* <S.PreviewContent />

            <S.Author><S.Avatar /> <S.NameAuthor>Julio C.</S.NameAuthor> </S.Author>

            <S.PublishedIn>Publicado em 12/06/2024</S.PublishedIn> */}
              </S.PostCard>
            );
          })}
      </S.Content>
    </Container>
  );
}

export default Blog;
