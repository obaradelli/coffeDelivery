import { HeaderContainer } from './styles'

import logoCoffe from '../../assets/logoCoffe.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="Logo Coffe Delivery" />
    </HeaderContainer>
  )
}
