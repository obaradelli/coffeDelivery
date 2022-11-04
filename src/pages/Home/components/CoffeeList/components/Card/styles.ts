import styled, { css } from 'styled-components'

import { ShoppingCart, Minus, Plus } from 'phosphor-react'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: column;

    padding: 1.25rem;
    width: 16rem;
    height: 19.375rem;

    border-radius: 0.375rem 2.25rem;

    background-color: ${theme.colors['base-card']};

    img {
      position: absolute;
      top: -1.375rem;
      right: 0;
      left: 0;
      bottom: 0;

      margin: 0 auto;

      width: 7.5rem;
      height: 7.5rem;
    }

    span {
      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize[10]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['yellow-dark']};
    }

    h5 {
      margin-top: 0.5rem;

      font-family: ${theme.fontFamily.baloo_2};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[20]};
      line-height: ${theme.lineHeight[130]};

      align-self: center;
    }

    p {
      margin-top: 0.5rem;
      text-align: center;

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;

      color: ${theme.colors['base-label']};
    }

    .background-span {
      display: flex;
      justify-content: center;
      align-items: center;

      text-transform: uppercase;

      gap: 20px;

      width: 5rem;
      height: 1.31rem;

      background: ${theme.colors['yellow-light']};
      border-radius: 100px;
    }

    .action-buy {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;

      height: 2.375rem;
    }

    .real {
      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
    }

    .value {
      font-family: ${theme.fontFamily.baloo_2};
      font-weight: ${theme.fontWeight.extraBold};
      font-size: ${theme.fontSize[24]};
      line-height: ${theme.lineHeight[160]};

      color: ${theme.colors['base-text']};
    }

    .shopping-cart {
      all: unset;
      position: relative;
      background: ${theme.colors['purple-dark']};
      padding: 0.5rem;
      gap: 0.25rem;

      display: flex;
      border-radius: 0.3125rem;

      &:hover {
        background-color: ${theme.colors['purple-']};
      }
    }

    .quantityProducts {
      all: unset;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;
      gap: 0.25rem;

      width: 4.5rem;
      gap: 1rem;

      border-radius: 0.375rem;
      background: ${theme.colors['base-button']};
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
