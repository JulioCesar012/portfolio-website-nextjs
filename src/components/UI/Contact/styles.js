import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
    SectionContact: styled.section`
        padding-bottom: ${space[7]}px;

        @media only screen and (max-width: 768px) {
            padding-bottom: 0;
        }
    `,
    TitleContact: styled.h3`
        margin-top: ${space[1]}px;
        margin-bottom: ${space[1]}px;
    `,
    DescriptionContact: styled.p``,
    ContactIcons: styled.ul`
        list-style: none;
        padding-left: 0;
        margin-top: ${space[5]}px;
    `,
    Icon: styled.li`
        display: flex;
        align-items: center;
        margin-bottom: ${space[2]}px;
        column-gap: 1rem;
    `,
    ContentIcons: styled.span`
        i {
            color: ${colors['verde-claro']};
            font-size: 1.2rem;
            padding: 5px;
            border-radius: 5px;
            background: ${colors['background/icon']};
        }
    `,
    InfoContact: styled.p`
        margin-bottom: 0;
    `,
    SocialLinks: styled.div`
       display: flex;
       margin-top: ${space[4]}px;
       align-items: center;
       column-gap: 1rem;
       color: ${colors['cinza/neutral']};
       font-size: 1.3rem;
       cursor: pointer;

       @media only screen and (max-width: 768px) {
        margin-bottom: ${space[4]}px;
       }
    `,
}