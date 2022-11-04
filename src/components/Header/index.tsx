import { HeaderContainer } from './styles'
import { useTheme } from 'styled-components'

import logoCoffe from '../../assets/logoCoffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  const { colors } = useTheme()

  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="Logo Coffe Delivery" />

      <div>
        <button className="localization">
          <MapPin
            color={colors['purple-']}
            weight="fill"
            type="map-pin-fill"
            size={22}
          />
          <span>Porto Alegre, RS</span>
        </button>

        <button className="shopping-cart">
          <ShoppingCart
            color={colors['yellow-dark']}
            weight="fill"
            type="shopping-cart-fill"
            size={22}
          />
          <span>3</span>
        </button>
      </div>
    </HeaderContainer>
  )
}
