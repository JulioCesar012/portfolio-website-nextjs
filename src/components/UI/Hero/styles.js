/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerHero: styled.section`
    padding: ${space[7]}px 0 ${space[12]}px;
  `,
  HeroContent: styled.div`
    padding-top: ${space[6]}px;

    @media only screen and (max-width: 992px) {
      padding-top: 0;
    }
  `,
  TitleContent: styled.h2`
    @media only screen and (max-width: 992px) {
      font-size: 1.4rem;
    }
  `,
  Tech: styled.h5`
    color: ${colors["cinza/neutral"]};
    font-weight: 400;

    @media only screen and (max-width: 992px) {
      font-size: 1.1rem;
    }
  `,
  SummaryText: styled.p`
    font-weight: 600;
  `,
  ButtonContent: styled.div``,
  ButtonAboutMe: styled.button`
    background: ${colors["azul-escuro/secondary-base"]};
    padding: ${space[1]}px ${space[2]}px;
    border: 1px solid ${colors["verde-claro"]};
    border-radius: 5px;

    &:hover {
      background-color: ${colors["verde-escuro"]};
    }

    a {
      text-decoration: none;
      color: ${colors["verde-claro"]};
      background: ${colors["transparent"]};
    }
  `,
  ButtonDownloadCV: styled.button`
    background: ${colors["transparent"]};
    border: none;
    outline: none;
    padding: ${space[1]}px ${space[3]}px;

    a {
      color: ${colors["verde-claro"]};
    }
  `,
  HeroImg: styled.div`
    text-align: end;
    position: relative;
    z-index: 9;

    img {
      border-radius: ${space[4]}px ${space[1]}px ${space[4]}px ${space[1]}px;

      @media only screen and (max-width: 992px) {
        width: 250px !important;
        height: 250px !important;
      }
    }

    @media only screen and (max-width: 768px) {
      text-align: center;
      margin-top: ${space[6]}px;
}
  `,
  HeroSkills: styled.div`
    text-align: left;
    width: 130px;
    padding: ${space[1]}px ${space[2]}px;
    position: absolute;
    top: 50%;
    left: 22%;
    transform: translateY(-50%);
    border-radius: 5px;
    background: ${colors["background/cinza"]};
    z-index: 10;

    @media only screen and (max-width: 992px) {
      width: 90px;
      padding: 10px;
      left: 5%;
    }

    @media only screen and (max-width: 768px) {
      left: 15%;
    }

    @media only screen and (max-width: 576px) {
      display: none;
    }
  `,
  LabelSkills: styled.h6`
    background: ${colors["transparent"]};
    color: ${colors["white/neutral-0"]};

    @media only screen and (max-width: 992px) {
      font-size: 0.7rem;
      margin-bottom: 0;
    }
  `,
  BarIcon: styled.span`
    background: ${colors["transparent"]};

    i {
      color: ${colors["verde-claro"]};
      background: ${colors["transparent"]};
      @media only screen and (max-width: 992px) {
        font-size: 0.7rem;
        margin-bottom: 0;
      }
    }
  `,
  HeroExperience: styled.div`
    width: 150px;
    position: absolute;
    bottom: -${space[1]}%;
    right: -5%;
    padding: ${space[1]}px ${space[2]}px;
    border-radius: 5px;
    background: ${colors["background/cinza"]};
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 3;

    @media only screen and (max-width: 992px) {
      padding: ${space[1]}px;
      width: 115px;
    }

    @media only screen and (max-width: 768px) {
      right: 20%;
    }

    @media only screen and (max-width: 576px) {
      display: none;
    }
  `,
  FlashIcon: styled.span`
    margin-right: ${space[1]}px;
    height: 100%;

    i {
      padding: ${space[1]}px;
      color: ${colors["verde-claro"]};
      background: ${colors["background/flash-icon"]};
      border-radius: 5px;
    }

    @media only screen and (max-width: 992px) {
      font-size: 0.8rem;
    }
  `,
  ContentHeroExperience: styled.div`
    background: ${colors["transparent"]};
  `,
  LabelExperience: styled.h6`
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 0.8rem;
    background: ${colors["transparent"]};

    @media only screen and (max-width: 992px) {
      font-size: 0.7rem;
    }
  `,
  LabelYears: styled.h5`
    font-weight: 600;
    background: ${colors["transparent"]};
    margin-bottom: 0;

    @media only screen and (max-width: 992px) {
      font-size: 0.9rem;
    }
  `,
};
