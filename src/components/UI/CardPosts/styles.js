import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContentCardPosts: styled.div`
    margin-bottom: ${space[5]}px;
    border: 2px solid ${colors['background/cinza']};
    outline: none;
    padding: ${space[2]}px;
    border-radius: ${space[1]}px;
    cursor: pointer;

    &:hover,
    &:active {
      border-color: ${colors["verde-claro"]};
    }
  `,
  PostImage: styled.div`
    img {
      min-height: 300px;
      max-height: 30px;
      border-radius: ${space[1]}px;
    }
    border: 2px solid ${colors['verde-claro']};
    border-radius: ${space[1]}px;
    margin-bottom: ${space[1]}px;
  `,
  PostTitle: styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: ${space[1]}px;
  `,
  Title: styled.p`
    font-size: 16px;
    max-width: 35ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  DescriptionSumary: styled.p`
    width: 100%;
    margin-top: -${space[2]}px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
    color: ${colors["cinza/neutral"]};
    font-weight: 500;
  `,
};
