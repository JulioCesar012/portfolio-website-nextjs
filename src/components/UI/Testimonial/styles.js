import styled from "styled-components";
import { colors, space } from "~/styles";

export default {
  ContainerTestimonial: styled.section`
    @media only screen and (max-width: 768px) {
      .testimonial_img {
        margin-top: -${space[6]}px;
        margin-bottom: ${space[2]}px;
        text-align: center;

        img {
          width: 300px !important;
          height: 300px !important;
        }
      }
    }
  `,
  // TestimonialImage: styled.img`
  //     width: 400px;
  //     height: 40px;
  // `,
  TitleClients: styled.h4`
    margin-top: ${space[1]}px;
    margin-bottom: ${space[5]}px;
  `,
  TestimonialItem: styled.div`
    padding: 0 ${space[2]}px;
  `,
  TestimonialClient: styled.div`
    display: flex;
    column-gap: 1rem;
    margin-bottom: ${space[4]}px;

    img {
      border-radius: 4px;
    }
  `,
  ContainerLabels: styled.div``,
  ClientName: styled.h6`
    margin-bottom: ${space[1]}px;
    font-weight: 400;
  `,
  CustomerCharge: styled.h6`
    font-weight: 550;
    color: ${colors["verde-claro"]};
  `,

  CustomerOpinion: styled.p``,
};
