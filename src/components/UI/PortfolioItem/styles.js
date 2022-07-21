import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerPortfolioItem: styled.div`
    background: ${colors["azul-escuro/secondary-base"]};
    padding: ${space[4]}px ${space[2]}px ${space[2]}px ${space[2]}px;
    border-radius: 10px;
    margin-bottom: ${space[4]}px;
  `,
  ContentPortfolioItem: styled.div`
    background: ${colors["transparent"]};
  `,
  Title: styled.h6`
    color: ${colors["verde-claro"]};
    margin-bottom: ${space[2]}px;
    background: ${colors["transparent"]};
  `,
  PortfolioImg: styled.div`
    background: ${colors["transparent"]};
    margin: ${space[4]}px 0 ${space[4]}px;
  `,
  Image: styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: ${space[1]}px;

    @media only screen and (max-width: 576px) {
      width: 100%;
      height: unset;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: unset;
    }
  `,
  PortfolioKeyword: styled.span`
    padding: ${space[1]}px ${space[1]}px;
    color: ${colors["white/neutral-0"]};
    background: ${colors["azul-escuro/tertiary-base"]};
    font-size: 0.7rem;
    font-weight: bold;
    margin-right: ${space[1]}px;
    border-radius: ${space[1]}px;
  `,
  PortfolioLive: styled.div`
    background: ${colors["transparent"]};
    margin-top: ${space[3]}px;
  `,
  ButtonLive: styled.button`
    &:last-child {
      margin-left: ${space[2]}px;
    }
  `,
};
