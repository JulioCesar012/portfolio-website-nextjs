/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  Header: styled.div`
    width: 100%;
    height: 80px;
    line-height: 80px;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  Logo: styled.div``,
  Title: styled.h1`
    font-size: 2rem;
    margin-bottom: 0;
    font-weight: 450;
  `,
  SlugTitle: styled.span`
    color: ${colors["verde-claro"]};
    font-weight: 600;
  `,

  Navigation: styled.div``,
  NavMenu: styled.div`
    display: flex;
    align-items: center;
    column-gap: 2.8rem;

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
  NavRight: styled.div`
    display: flex;
    align-items: center;
  `,
  Phone: styled.p`
    color: ${colors["verde-claro"]};
    position: relative;
    font-weight: 550;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 25%;
      left: -20px;
      width: 1px;
      height: 14px;
      background: ${colors["cinza/neutral"]};
      color: ${colors["cinza/neutral"]};
    }
  `,
  IconPhone: styled.i`
    color: ${colors["cinza/neutral"]};
  `,
  HeaderShrink: styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    box-sizing: border-box;
    box-shadow: ${space[1]}px ${space[1]}px ${space[2]}px -${space[1]}px ${colors['verde-escuro']};
    z-index: 9999;
  `
};
