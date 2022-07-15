/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  Footer: styled.footer``,
  NavMenu: styled.div`
    display: flex;
    align-items: center;
    column-gap: 2.8rem;
    margin-bottom: ${space[3]}px;

    a {
      color: ${colors["cinza/neutral"]};
      font-weight: 550;
      font-size: 1rem;
      text-decoration: none;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        color: ${colors["verde-claro"]};
      }

      &:first-child {
        color: ${colors["verde-claro"]};
      }
    }
  `,

  FooterCreator: styled.div``,
  WebsiteCreator: styled.h6`
    text-align: right;
    font-weight: 500;
    color: ${colors["white/neutral-0"]};
  `,
  FooterCopyright: styled.div`
    border-top: 1px solid ${colors['border']};
    font-weight: 500;
  `,
  Label: styled.p`
    font-size: 0.8rem;
    text-align: center;
    padding-top: 20px;
    color: ${colors['cinza/neutral']}
  `,
};
