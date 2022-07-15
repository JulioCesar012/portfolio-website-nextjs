/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  SectionAbout: styled.section``,
  Label: styled.h3`
    margin-top: ${space[1]}px;
    font-weight: 600;
  `,
  DescriptionAboutMe: styled.p`
    margin-bottom: ${space[4]}px;
  `,

  ContainerSkills: styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  `,
  Skills: styled.div`
    margin-bottom: ${space[1]}px;
  `,
  LabelSkill: styled.h6`
    display: flex;
    align-items: center;
    gap: 5px;
  `,
  Icon: styled.span`
    i {
      color: ${colors["verde-claro"]};
    }
  `,
  Portfolio: styled.div`
    margin-top: ${space[3]}px;
  `,
  PortfolioButton: styled.button``,
  ContainerAboutImg: styled.div`
    display: flex;
    gap: 4px;
    justify-content: end;
  `,
  ContentAbout: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
  `,
  AboutImg: styled.div`
    display: flex;
    gap: 4px;
    justify-content: flex-end;
    padding: ${space[1]}px;
    margin-bottom: ${space[2]}px;
    border-radius: 5px;

  `,
  About: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
  `,
  ContainerImg: styled.div`
    padding: 10px;
    background-color: ${colors["azul-escuro/secondary-base"]};
    margin-bottom: 20px;
    border-radius: 5px;
    margin-right: 15px;

    img {
        width: 100% !important;
        max-width: 200px !important;
        border-radius: 5px;
      }
  `,
};
