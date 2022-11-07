import styled, { css } from 'styled-components'

export const DivEndereco = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

    h1 {
      font-family: ${theme.fontFamily.baloo_2};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[18]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-title']};
    }
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 640px;
    height: 372px;
    padding: 2.5rem;
    margin-top: 0.938rem;
    border-radius: 6px;

    background-color: ${theme.colors['base-card']};

    .endereço {
      display: flex;
    }

    .title {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;

      h2 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-subtitle']};
      }
    }

    p {
      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-text']};
    }

    .infos {
      display: flex;
      flex-direction: column;

      margin-top: 32px;
      margin-right: 0.5rem;
      gap: 16px 12px;
    }

    .cep {
      all: unset;
      align-items: center;
      justify-content: left;

      width: 200px;
      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    .rua {
      all: unset;
      align-items: center;
      justify-content: left;

      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    .numero {
      all: unset;
      align-items: center;
      justify-content: left;

      width: 200px;
      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    .infos-2 {
      display: flex;
      flex-direction: row;
      gap: 16px 12px;
    }

    .infos-3 {
      display: flex;
      flex-direction: row;
      padding-top: 16px;
      gap: 16px 12px;
    }

    .complemento {
      all: unset;
      align-items: center;
      justify-content: left;

      width: 348px;
      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    .bairro {
      all: unset;
      align-items: center;
      justify-content: left;

      width: 186px;
      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    .cidade {
      all: unset;
      align-items: center;
      justify-content: left;

      width: 240px;
      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    .uf {
      all: unset;
      align-items: center;
      justify-content: left;

      width: 65px;
      height: 42px;
      padding-left: 12px;

      background-color: ${theme.colors['base-input']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }
  `}
`
export const DivPagamento = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 640px;
    height: 207px;
    padding: 2.5rem;
    border-radius: 6px;
    margin-top: 0.75rem;

    background-color: ${theme.colors['base-card']};

    .endereço {
      display: flex;
    }

    .title {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
      margin-bottom: 32px;

      h2 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-subtitle']};
      }
    }

    p {
      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-text']};
    }

    .formas-de-pagamento {
      display: flex;
      flex-direction: column;
    }

    .card {
      all: unset;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;

      gap: 12px;
      width: 100%;
      height: 51px;
      padding-left: 12px;
      border-radius: 6px;

      background-color: ${theme.colors['base-button']};

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[12]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-text']};

      &:hover {
        filter: brightness(0.9);
      }
    }

    .direction {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  `}
`
