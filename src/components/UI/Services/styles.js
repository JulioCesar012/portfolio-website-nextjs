import styled from "styled-components";
import { space } from "~/styles";

export default {
  ServicesContainer: styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;

    @media only screen and (max-width: 992px) {
      flex-direction: column;
      align-items: unset;
      padding-left: ${space[1]}px;
      padding-right: ${space[1]}px;
    }
  `,
  SectionServices: styled.div``,
  SkillsAddOn: styled.h3`
    font-weight: 600;

    @media only screen and (max-width: 992px) {
      font-size: 1.3rem;
    }
  `,
  MyProfileDescription: styled.p``,
  ContentServices: styled.div`
    @media only screen and (max-width: 992px) {
      padding-left: ${space[1]}px;
      padding-right: ${space[1]}px;
    }
  `,
};
