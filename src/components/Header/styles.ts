import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 2rem 16rem;

  background: ${(props) => props.theme['base-background']};
`
