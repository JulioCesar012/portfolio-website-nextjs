import styled from "styled-components";

export default {
  ServicesContainer: styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;

    @media only screen and (max-width: 992px) {
      flex-direction: column;
      align-items: unset;
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
};
