/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
    ContainerServiceItem: styled.div`
        background: ${colors['azul-escuro/secondary-base']};
        padding: ${space[4]}px;
        margin-bottom: ${space[4]}px;
        display: flex;
        align-items: center;
        column-gap: 1rem;
        transition: 0.3s;

        &:hover {
            background: ${colors['verde-claro']};
            cursor: pointer;

            transform: translateY(-20px);

            h5 {
                color: ${colors['azul-escuro/secondary-base']};
            }

            i {
                color: ${colors['azul-escuro/secondary-base']}
            }
        }

        &:first-child {
            border-radius: ${space[1]}px 0 ${space[1]}px ${space[1]}px;
        }

        &:last-child {
            border-radius: ${space[1]}px ${space[1]}px 0 ${space[1]}px;
        }

        @media only screen and (max-width: 992px) {
            padding: ${space[2]}px;
        }
    `,
    Icon: styled.span`
        background: ${colors['transparent']};
        i {
            background: ${colors['transparent']};
            color: ${colors['verde-claro']};
            font-size: 3rem;

            @media only screen and (max-width: 992px) {
            font-size: 2rem;
        }
        }
        @media only screen and (max-width: 992px) {
            font-size: 2rem;
        }
    `,
    Title: styled.h5`
        background: ${colors['transparent']};
        font-size: 1rem;

        @media only screen and (max-width: 992px) {
            font-size: 0.9rem;
        }
    `,

}