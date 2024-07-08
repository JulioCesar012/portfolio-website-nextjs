import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';

import S from './styles';
import useWindowWidth from '~/hooks/useWindowWidth';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  const windowWidth = useWindowWidth();

  const fetchPost = async (postId) => {
    const BLOG_ID = process.env.NEXT_BLOG_ID; // Seu ID do Blog
    const API_KEY = process.env.NEXT_API_KEY_BLOGGER; // Sua chave de API do Google

    const POST_API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`;

    try {
      const response = await fetch(POST_API_URL);
      if (!response.ok) {
        throw new Error('Erro ao buscar o post');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const data = await fetchPost(id);
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do post:', error);
      }
    };

    if (id) {
      fetchPostData();
    }
  }, [id]);

  useEffect(() => {
    if (postData) {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [postData]);

  useEffect(() => {
    if (postData) {
      document.title = postData.title;
    }
  }, [postData]);

  const handleImageClick = (e, imageUrl) => {
    e.preventDefault();
    setPreviewImage(imageUrl);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  let trimmedTitle = postData?.title;
  if (trimmedTitle?.length > 45) {
    trimmedTitle = trimmedTitle?.substring(0, 45) + '...';
  }

  // Formatando a data de publicação
  const formattedPublishedDate = new Date(
    postData?.published
  ).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Removendo a imagem destaque do conteúdo no ambiente do cliente
  const contentWithImage = postData?.content;

  // Aplicando estilos personalizados ao conteúdo
  const styledContent = `
    <style>
      p {
        background: transparent;
        color: white; /* Cor do texto */
        font-size: 16px; /* Tamanho da fonte */
        line-height: 1.6; /* Altura da linha */
        font-weight: 350;
      }
      a {
        color: #0070f3; /* Cor dos links */
      }
      pre {
        padding: 10px; /* Espaçamento interno */
        border-radius: 5px; /* Bordas arredondadas */
        overflow: auto; /* Rolagem automática */
      }
      code {
        border-radius: 15px;
        font-family: 'Courier New', Courier, monospace; /* Fonte do código */

        span {
            background: transparent
        }
      }

    img {
      width: 100%; /* 100% por padrão */
      height: auto; /* Altura automática */
      max-width: 100%; /* Garante que a imagem não ultrapasse seu contêiner */
      display: block; /* Evita espaços extras ao redor da imagem */
      margin: 0 auto; /* Centraliza a imagem */
      object-fit: contain; /* Mantém a proporção da imagem */
    }

    /* Media Query para ajustar a imagem em dispositivos menores */
    @media (max-width: 768px) {
      img {
        width: 90%; /* Reduz a largura para 90% em tablets */
      }
    }
    </style>
    ${contentWithImage}
  `;

  return (
    <Container
      style={{
        maxWidth: windowWidth > 900 && '850px',
        marginTop: '5rem',
      }}
    >
      {loading ? (
        <>
          <Skeleton
            height={40}
            width={'60%'}
            style={{ marginBottom: '1rem' }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Skeleton
              circle
              height={50}
              width={50}
              style={{ marginRight: '1rem' }}
            />
            <div style={{ width: '100%' }}>
              <Skeleton height={20} width={'30%'} />
              <Skeleton height={20} width={'25%'} />
            </div>
          </div>
          <Skeleton height={60} />
          <Skeleton height={350} />
        </>
      ) : (
        <>
          <S.Header>
            <S.Title title={postData?.title}>{trimmedTitle}</S.Title>

            <S.ContentAuthor>
              <div>
                <S.Avatar src={postData?.author.image.url} alt="Avatar" />
              </div>
              <div>
                <S.Name>{postData?.author?.displayName}</S.Name>
                <S.Created>{formattedPublishedDate}</S.Created>
              </div>
            </S.ContentAuthor>
          </S.Header>

          <S.Content>
            <div
              dangerouslySetInnerHTML={{ __html: styledContent }}
              onClick={(e) => {
                if (e.target.tagName === 'IMG') {
                  handleImageClick(e, e.target.src);
                }
              }}
            />
          </S.Content>

          {previewImage && (
            <S.PreviewOverlay onClick={handleClosePreview}>
              <S.CloseButton onClick={handleClosePreview}>
                &times;
              </S.CloseButton>
              <S.PreviewImage src={previewImage} alt="Preview" />
            </S.PreviewOverlay>
          )}
        </>
      )}
    </Container>
  );
};

export default Post;
