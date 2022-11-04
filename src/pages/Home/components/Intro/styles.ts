import styled, { css } from 'styled-components'

interface BoxIconProps {
  bgColor: string
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 5.75rem 10rem;
  gap: 3.5rem;
`

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      h1 {
        font-family: ${theme.fontFamily.baloo_2};
        font-weight: ${theme.fontWeight.extraBold};
        font-size: ${theme.fontSize[48]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-title']};
      }
    }
    .sub-title {
      h2 {
        font-family: ${theme.fontFamily.roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[20]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['base-subtitle']};
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      font-family: ${theme.fontFamily.roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[130]}

      font-style: normal;
      color: ${theme.colors['base-text']}:;

      .box-master {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3rem;

        .box {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
          width: 18.75rem;
        }
      }
    }
  `}
`
export const BoxIcon = styled.div<BoxIconProps>`
  ${({ bgColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${bgColor};
    border-radius: 1000px;

    width: 32px;
    height: 32px;
  `}
`
