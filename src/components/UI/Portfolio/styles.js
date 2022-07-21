import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerPortfolio: styled.div``,
  Works: styled.h4`
    margin-bottom: ${space[4]}px;
  `,
  ContainerButton: styled.div`
    text-align: end;

    .button-mobile-app {
        color: ${colors["verde-claro"]};
    }

    @media only screen and (max-width: 768px) {
      text-align: left;
      margin-top: -${space[1]}px;
      margin-bottom: ${space[3]}px;
    }
  `,
  ButtonMobileApp: styled.button`
    color: ${colors["white/neutral-0"]};
    font-weight: bold;
  `,
};
