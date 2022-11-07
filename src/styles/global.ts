import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

  a {
    all: unset;
  }

body { 
  background: ${(props) => props.theme.colors['base-background']};
 }

 button {
  cursor: pointer !important;
 }
`
