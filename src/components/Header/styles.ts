import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    z-index: 99;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors['base-background']};

    width: 100%;
    padding: 2rem 16rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      padding: 0;
      gap: 0.75rem;

      .localization {
        all: unset;
        background: ${theme.colors['purple-light']};
        padding: 0.5rem;
        gap: 0.25rem;

        display: flex;
        align-items: center;
        flex-direction: row;
        border-radius: 0.3125rem;

        span {
          font-family: ${theme.fontFamily.roboto};
          font-weight: ${theme.fontWeight.regular};
          font-size: ${theme.fontSize[14]};
          line-height: ${theme.lineHeight[130]};

          color: ${theme.colors['purple-dark']};
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }

      .shopping-cart {
        all: unset;
        position: relative;
        background: ${theme.colors['yellow-light']};
        padding: 0.5rem;
        gap: 0.25rem;

        display: flex;
        border-radius: 0.3125rem;

        span {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background: ${theme.colors['yellow-dark']};

          width: 20px;
          height: 20px;
          padding: 0;

          position: absolute;
          border-radius: 999px;
          right: -0.5rem;
          top: -0.5rem;

          color: ${theme.colors['base-white']};
          font-family: ${theme.fontFamily.roboto};
          font-weight: ${theme.fontWeight.bold};
          font-size: ${theme.fontSize[12]};
          line-height: ${theme.lineHeight[130]}:;
        }
      }
    }
  `}
`
