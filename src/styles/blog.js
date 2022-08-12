import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContentPosts: styled.div`
    margin-top: ${space[8]}px;
  `,
  SectionTitlePosts: styled.h4`
    padding-top: ${space[2]}px;
  `,
  CardsPosts: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${space[7]}px;
    margin-top: ${space[5]}px;
  `,
  ContainerPost: styled.div`
    margin-top: ${space[2]}px;
  `,
  Top: styled.div`
    text-align: center;
  `,
  LogoPost: styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
  `,
  PostTitle: styled.h2`
    text-align: center;
    margin: ${space[3]}px 0;

    @media only screen and (max-width: 992px) {
      font-size: ${space[3]}px;
    }
  `,
  Author: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${space[1]}px;
    margin-bottom: ${space[2]}px;
    img {
      border-radius: 50px;
      object-fit: none;
    }
  `,
  AuthorName: styled.strong`
    width: 100%;
    justify-items: center;
    color: ${colors["white/neutral-0"]};
  `,
  CreatedAt: styled.strong`
    color: ${colors["white/neutral-0"]};
  `,
  Paragraph: styled.strong`
    color: ${colors["white/neutral-0"]};
    line-height: 30px;
  `,
  ContentPost: styled.div`
    text-align: center;
    color: ${colors["cinza/neutral"]};

    p {
      text-align: left;
    }

    iframe {
      margin-top: ${space[3]}px;
      margin-bottom: ${space[3]}px;
    }
  `,
  NotFoundPosts: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;

    img {
      width: 100%;
      height: 700px;
      object-fit: contain;
    }
  `,
  ButtonBack: styled.button`
    width: 260px;
    height: 70px;
    border-radius: ${space[10]}px;
    border: 0;
    background: ${colors["back-button"]};
    font-size: 20px;
    color: ${colors["white/neutral-0"]};
    font-weight: 550;

    &:active {
      opacity: 0.8;
    }
  `,
  Label: styled.h5``,
};
