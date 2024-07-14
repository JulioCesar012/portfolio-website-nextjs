import styled, { keyframes, css } from 'styled-components';
import { colors, space } from '~/styles';

const pulse = keyframes`
    0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }

`;

export default {
  TitlePosts: styled.h1``,
  HeaderCategory: styled.div`
    justify-content: center;
    display: flex;
    padding: ${space[7]}px 0 ${space[0]}px;
    gap: ${space[4]}px;
    overflow-x: auto; /* Habilita scroll horizontal */
    -webkit-overflow-scrolling: touch; /* Suporte para scroll suave no iOS */
    scrollbar-width: none; /* Remove a barra de rolagem padrão */
    -ms-overflow-style: none; /* Remove a barra de rolagem padrão no IE/Edge */
    scrollbar-color: transparent transparent; /* Remove a barra de rolagem padrão no Firefox */
    /* Adicione um indicador de rolagem customizado se necessário */
    /* &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 2px;
    } */

    @media (max-width: 768px) {
      gap: ${space[2]}px; /* Reduz o espaçamento entre itens em dispositivos menores */
      padding: ${space[4]}px 0 ${space[2]}px; /* Ajusta o padding para dispositivos menores */
      flex-wrap: nowrap; /* Garante que os itens não quebrem para a próxima linha */
      overflow-x: auto; /* Habilita scroll horizontal em dispositivos menores */
    }
  `,
  Category: styled.div`
    font-size: 17px;
    display: inline-block;
    font-weight: 500;
    margin: 0 ${space[2]}px; /* Adapta a margem para dispositivos menores */
    color: white;
    padding-bottom: 0.5rem;
  `,
  AnimationLetter: styled.span`
    display: inline-block;
    transition: transform 0.3s ease-in-out;

    ${({ hovered, delay }) =>
      hovered &&
      css`
        color: ${colors['verde-claro']};
        cursor: pointer;
        animation: ${pulse} 0.4s ${delay} ease-in-out forwards;
      `}
  `,
  Content: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 2.8rem;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    border-top: 1px solid #808dad;

    @media (max-width: 1200px) {
      gap: 1rem;
    }

    @media (max-width: 768px) {
      gap: 0.5rem;
    }
  `,
  PostCard: styled.div`
    width: calc(33.33% - 1rem); /* 3 colunas */
    display: block;
    cursor: pointer;
    max-width: 100%;

    @media (max-width: 1200px) {
      width: calc(50% - 0.75rem); /* 2 colunas */
    }

    @media (max-width: 768px) {
      width: 100%; /* 1 coluna */
    }

    &:hover {
      opacity: 0.9;
    }
    &:active {
      cursor: grabbing;
      opacity: 0.8;
    }
  `,
  PostTitle: styled.h2`
    color: white;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  PostImage: styled.img`
    border-radius: 10px;
    border: 4px solid white;
    max-width: 100%;
    height: auto;
    max-height: 224px;

    &:hover {
      border: 4px solid ${colors['verde-claro']};
    }
  `,
  PreviewContent: styled.div``,
  Author: styled.div``,
  Avatar: styled.img``,
  NameAuthor: styled.h4``,
  PublishedIn: styled.div``,
  NotFoundPost: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
    }

    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    a {
      text-align: center;
      width: 100%;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      border: 0.5px solid ${colors['background-azul/primary-base']};
      background: ${colors['verde-claro']};
      color: ${colors['background-azul/primary-base']};
      font-weight: 450;
      font-style: normal;

      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.7;
      }
    }
  `,
};

export const skeletonThumb = {
  height: '195.75px',
};

export const skeletonTitle = {
  width: '60%',
  height: '25px',
  marginTop: '10px',
};
