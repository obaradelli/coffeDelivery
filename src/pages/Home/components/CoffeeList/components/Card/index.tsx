import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'

import { CoffeeProps } from '../../../../../../@types'
import { useCart } from '../../../../../../hooks/useCart'

import { Container, IconPlus, IconMinus } from './styles'

interface CardProps {
  coffee: CoffeeProps
}

export const Card = ({ coffee }: CardProps) => {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity === 1) return

    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const { colors } = useTheme()

  return (
    <Container>
      <div>
        <div style={{ height: 90 }} />
        <img src={coffee.image} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: '0.45rem',
          }}
        >
          {coffee.tag.map((tag) => (
            <span key={tag} className="background-span">
              {tag}
            </span>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <h5>{coffee.name}</h5>
          <p>{coffee.description}</p>
        </div>
      </div>
      <div className="action-buy">
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '0.1875rem' }}
        >
          <p className="real">R$</p>
          <p className="value">{coffee.price}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <button className="quantityProducts">
            <IconMinus onClick={handleDecrease} />
            {quantity}
            <IconPlus onClick={handleIncrease} />
          </button>
          <button onClick={handleAddToCart} className="shopping-cart">
            <ShoppingCart
              color={colors['base-white']}
              weight="fill"
              type="shopping-cart-fill"
              size={22}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}
