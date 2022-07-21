import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  FormContainer: styled.form``,
  FormGroup: styled.div``,
  Field: styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: ${colors["azul-escuro/secondary-base"]};
    color: ${colors["white/neutral-0"]};
    padding: ${space[2]}px ${space[2]}px;
    border-radius: ${space[1]}px;
    margin-bottom: ${space[2]}px;

    &::placeholder {
      font-size: 0.8rem;
      color: ${colors["cinza/neutral"]};
    }
  `,
  MessageField: styled.textarea`
    width: 100%;
    height: 150px;
    max-height: 150px;
    resize: none;
    border: none;
    outline: none;
    background: ${colors["azul-escuro/secondary-base"]};
    color: ${colors["white/neutral-0"]};
    padding: ${space[2]}px ${space[2]}px;
    border-radius: ${space[1]}px;
    margin-bottom: ${space[2]}px;

    &::placeholder {
      font-size: 0.8rem;
      color: ${colors["cinza/neutral"]};
    }
  `,
  SendButton: styled.button`
    color: ${colors['verde-claro']};
  `,
  LoadingSpinner: styled.div``,
  Message: styled.button`
     background: ${colors["azul-escuro/secondary-base"]};
    padding: ${space[1]}px ${space[2]}px;
    border: 1px solid ${colors["verde-claro"]};
    border-radius: 5px;
    color: ${colors['white/neutral-0']};
  `,
};
