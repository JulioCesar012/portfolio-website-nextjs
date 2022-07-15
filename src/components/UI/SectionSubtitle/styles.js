import styled from 'styled-components';
import { colors, space } from '~/styles';

export default {
    Subtitle: styled.h5`
        color: ${colors['verde-claro']};
        font-weight: 400;
        margin-left: ${space[5]}px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: -${space[5]}px;
            width: 30px;
            height: 1px;
            background: ${colors['verde-claro']};
            color: ${colors['verde-claro']};
        }
    `,
}