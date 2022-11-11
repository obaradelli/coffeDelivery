import { HeaderContainer } from './styles'
import { useTheme } from 'styled-components'

import logoCoffe from '../../assets/logoCoffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, Outlet } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useEffect, useState } from 'react'

interface AdressProps {
  cidade: string
  uf: string
}

export function Header() {
  const [cartQuantity, setCartQuantity] = useState<number>(0)
  const { colors } = useTheme()

  const getCartQuantity = () => {
    const jCartItems = localStorage.getItem('coffeDelivery:cartItems')

    console.log(jCartItems)

    if (!jCartItems) return

    const cartItems = JSON.parse(jCartItems)

    console.log(cartItems)

    setCartQuantity(cartItems.lenght)
  }

  const [adress, setAdress] = useState<AdressProps>()

  function setToLocalAdress() {
    const adressStorage = localStorage.getItem('endereco')

    if (!adressStorage) {
      const jAdress = {
        cidade: 'Santo André',
        uf: 'SP',
      }

      setAdress(jAdress)

      return
    }

    const jAdress = JSON.parse(adressStorage) as AdressProps

    setAdress(jAdress)
  }

  useEffect(() => {
    setToLocalAdress()
    getCartQuantity()
  }, [])

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
            <span>
              {adress?.cidade}, {adress?.uf}
            </span>
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
