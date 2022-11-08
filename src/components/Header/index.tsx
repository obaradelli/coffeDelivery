import { HeaderContainer } from './styles'
import { useTheme } from 'styled-components'

import logoCoffe from '../../assets/logoCoffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { colors } = useTheme()
  const { cartQuantity, setItemInStorage } = useCart()

  return (
    <>
      <HeaderContainer>
        <NavLink to="/home" title="home">
          <img src={logoCoffe} alt="Logo Coffe Delivery" />
        </NavLink>

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

          <NavLink to="/checkout" title="checkout">
            <button className="shopping-cart">
              <ShoppingCart
                color={colors['yellow-dark']}
                weight="fill"
                type="shopping-cart-fill"
                size={22}
              />
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            </button>
          </NavLink>
        </div>
      </HeaderContainer>
      <Outlet />
    </>
  )
}
