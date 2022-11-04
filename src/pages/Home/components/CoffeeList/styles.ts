import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

    margin: 10rem;

    h2 {
      font-family: ${theme.fontFamily.baloo_2};
      font-weight: ${theme.fontWeight.extraBold};
      font-size: ${theme.fontSize[32]};
      line-height: ${theme.lineHeight[130]};

      font-style: normal;
      color: ${theme.colors['base-title']};

      margin-bottom: 2rem;
    }
  `}
`
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`
