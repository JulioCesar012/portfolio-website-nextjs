import styled from 'styled-components';
import { colors } from '~/styles';

export default {
  Header: styled.div`
    border-bottom: 1.5px solid #808dad;
    padding-bottom: 2.5rem;
  `,
  Title: styled.h1`
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
  `,
  ContentAuthor: styled.div`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  Avatar: styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid white;
  `,
  Name: styled.div`
    color: white;
    font-weight: 500;
  `,
  Created: styled.div`
    color: ${colors['verde-claro']};
    font-weight: 500;
  `,
  Content: styled.div`
    width: 100%;
    margin-top: 1.5rem;
  `,
  PreviewOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    img {
      background: transparent;
    }
  `,
  PreviewImage: styled.img`
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  `,
  CloseButton: styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  `,
};
