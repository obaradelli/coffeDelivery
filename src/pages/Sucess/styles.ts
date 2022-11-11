import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-top: 108px;
    gap: 5rem;

    .geral {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: left;

      width: 100%;
      padding-top: 5rem;
      padding-left: 10rem;
    }

    .title {
      h1 {
        font-family: ${theme.fontFamily.baloo_2};
        font-weight: ${theme.fontWeight.extraBold};
        font-size: ${theme.fontSize[32]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['yellow-dark']};
      }
      p {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[20]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-subtitle']};
      }
    }

    .geral2 {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: left;
      border-radius: 60px !important;

      padding-left: 10rem;
      padding-right: 10rem;
      gap: 16rem;
      width: 100%;
    }
    .infos {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      /* border-radius: 60px !important;
      border: double 2px transparent;
      border-image-slice: 1;
      border-image-source: linear-gradient(#8047f8, #dbac2c); */

      width: 300px;
      height: 80px;
      border: double 1px transparent;
      border-radius: 6px 36px;
      background-image: linear-gradient(#fafafa, #fafafa),
        radial-gradient(circle at top left, #8047f8, #dbac2c);
      background-origin: border-box;
      background-clip: padding-box, border-box;

      padding: 40px;
      gap: 32px;

      width: 526px;
      height: 270px;
    }

    .infos2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 32px;

      width: 526px;
      height: 270px;
    }

    .item {
      display: flex;
      flex-direction: row;

      gap: 12px;
    }

    .entrega {
      display: flex;
      flex-direction: column;

      h3 {
        display: flex;
        flex-direction: row;

        gap: 4px;

        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-text']};
      }

      p {
        display: flex;
        flex-direction: left;

        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-text']};
      }
    }

    .separator {
      display: flex;
      flex-direction: column;
    }

    .img {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 15px;

      width: 32px;
      height: 32px;

      background: #8047f8;
      border-radius: 1000px;
    }
    .img-2 {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 15px;

      width: 32px;
      height: 32px;

      background: #dbac2c;
      border-radius: 1000px;
    }
    .img-3 {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 15px;

      width: 32px;
      height: 32px;

      background: #c47f17;
      border-radius: 1000px;
    }

    .dpflex {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      button {
     
          all:unset;
          cursor: pointer;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 8px;
          gap:4px

          width: 368px;
          height: 20px;

          background: ${theme.colors['yellow-']};
          border: 1px solid #000000;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;


          font-family: ${theme.fontFamily.roboto};
          font-weight: ${theme.fontWeight.extraBold};
          font-size: ${theme.fontSize[14]};
          line-height: ${theme.lineHeight[160]};

          font-style: normal;
          color: ${theme.colors['base-white']};

          &:hover {
            background: ${theme.colors['yellow-dark']};
          }

        
      }
    }
  `}
`
