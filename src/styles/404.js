import styled from "styled-components";
import { colors, space } from "./Theme";

export default {
  NotFound: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media only screen and (max-width: 900px) {
        height: 500px;
      }

      @media only screen and (max-width: 320px) {
        height: 100%;
      }
    }
  `,
};
