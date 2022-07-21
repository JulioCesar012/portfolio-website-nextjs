/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  Header: styled.header`
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

    @media only screen and (max-width: 992px) {
      font-size: 1.3rem;
    }
  `,
  SlugTitle: styled.span`
    color: ${colors["verde-claro"]};
    font-weight: 600;
  `,

  Navigation: styled.div`
    /* ====== responsividade ===== */
    @media only screen and (max-width: 992px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${colors["azul-escuro/fourth-base"]};
      z-index: 9999;
      display: none;
    }
  `,
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

    /* ====== responsividade ===== */
    @media only screen and (max-width: 992px) {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      height: 100%;
      flex-direction: column;
      justify-content: center;
    }
  `,
  NavRight: styled.div`
    display: flex;
    align-items: center;

    /* ====== responsividade ===== */
    @media only screen and (max-width: 992px) {
      display: none;
    }
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
    box-shadow: ${space[1]}px ${space[1]}px ${space[2]}px -${space[1]}px ${colors["verde-escuro"]};
    z-index: 9999;
  `,
  MobileMenu: styled.span`
    display: none;

    i {
      font-size: 1.3rem;
      color: ${colors["white/neutral-0"]};
      cursor: pointer;
    }

    @media only screen and (max-width: 992px) {
      display: contents;
    }
  `,
};
