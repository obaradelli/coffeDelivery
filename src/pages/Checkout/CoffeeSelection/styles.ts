import styled, { css } from 'styled-components'

import { Minus, Plus, Trash } from 'phosphor-react'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

    .title {
      h2 {
        font-family: ${theme.fontFamily.baloo_2};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[18]};
        line-height: ${theme.lineHeight[130]};

        padding-bottom: 15px;

        font-style: normal;
        color: ${theme.colors['base-title']};
      }
    }
  `}
`

export const DivCardCoffee = styled.div`
  ${({ theme }) => css`
    .box {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;

      padding: 40px;
      gap: 24px;

      width: 448px;
      min-height: 498px;
      border-radius: 6px 44px;

      background-color: ${theme.colors['base-card']};
    }

    .card-coffe {
      display: flex;
      flex-direction: row;

      gap: 20px;

      h3 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        padding-bottom: 4px;

        font-style: normal;
        color: ${theme.colors['base-title']};
      }

      .coffe {
        width: 64px;
        weight: 64px;
      }    
    }

    .title2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h4 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.extraBold};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        padding-bottom: 4px;

        font-style: normal;
        color: ${theme.colors['base-title']};
      }

    }

    .title3 {
      display: flex;
      flex-direction: row;

      gap: 180px;

      h4 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.extraBold};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        padding-bottom: 4px;

        font-style: normal;
        color: ${theme.colors['base-title']};
      }

    }

    .button {
      display: flex;
      flex-direction: row;

      gap: 8px;
    }

    .buttonItem {
        all: unset;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 72px;
        height: 32px; 
        gap: 8px;

        border-radius: 6px;
        background-color: ${theme.colors['base-button']};

        p { 
          font-family: ${theme.fontFamily.roboto};
          font-weight: ${theme.fontWeight.regular};
          font-size: ${theme.fontSize[16]};
          line-height: ${theme.lineHeight[130]};

          font-style: normal;
          color: ${theme.colors['base-title']};
          }

          &:hover {
        filter: brightness(0.9);
      }
        }

        .buttonItem2 {
        all: unset;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 91px;
        height: 32px; 
        gap: 8px;

        border-radius: 6px;
        background-color: ${theme.colors['base-button']};

        p { 
          font-family: ${theme.fontFamily.roboto};
          font-weight: ${theme.fontWeight.regular};
          font-size: ${theme.fontSize[12]};
          line-height: ${theme.lineHeight[160]};

          font-style: normal;
          color: ${theme.colors['base-text']};
          }

          &:hover {
        filter: brightness(0.9);
      }
        }

        .separetor {
          width: 368px;
          height: 0px;

          border: 1px solid #E6E5E5;
        }

        .buttonbuy {
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

        .continuebuy {

          all:unset;
          cursor: pointer;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          font-family: ${theme.fontFamily.roboto};
          font-weight: ${theme.fontWeight.extraBold};
          font-size: ${theme.fontSize[14]};
          line-height: ${theme.lineHeight[160]};

          font-style: normal;
          color: ${theme.colors['yellow-']};

         }
     
  `}
`

export const Tabel = styled.div`
  ${({ theme }) => css`
    .tabel {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }

    .tabelaprice {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h3 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-text']};
      }

      p {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-text']};
      }
    }

    .total {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h3 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.extraBold};
        font-size: ${theme.fontSize[20]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-text']};
      }

      p {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.extraBold};
        font-size: ${theme.fontSize[20]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-text']};
      }
    }
  `}
`

export const IconPlus = styled(Plus).attrs(() => ({
  weight: 'bold',
  type: 'plus-fill',
}))`
  ${({ theme }) => css`
    color: ${theme.colors['purple-']};

    &:hover {
      color: ${theme.colors['purple-dark']};
    }
  `}
`

export const IconMinus = styled(Minus).attrs(() => ({
  weight: 'bold',
  type: 'plus-fill',
}))`
  ${({ theme }) => css`
    color: ${theme.colors['purple-']};

    &:hover {
      color: ${theme.colors['purple-dark']};
    }
  `}
`

export const IconTrash = styled(Trash).attrs(() => ({
  weight: 'bold',
}))`
  ${({ theme }) => css`
    color: ${theme.colors['purple-']};

    &:hover {
      color: ${theme.colors['purple-dark']};
    }
  `}
`
