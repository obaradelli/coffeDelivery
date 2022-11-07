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
      justify-content: space-between;
      align-items: left;

      gap: 6.375rem;
    }

    .infos {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px;
      gap: 32px;

      position: absolute;
      width: 526px;
      height: 270px;
    }
  `}
`
