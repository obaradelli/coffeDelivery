import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import expresso from '../../../../../../assets/Expresso.svg'

import { Container, IconPlus, IconMinus } from './styles'

interface CoffeeProps {
  image: string
  tag: string[]
  name: string
  description: string
  price: string
}

interface CardProps {
  coffee: CoffeeProps
}

export const Card = ({ coffee }: CardProps) => {
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
            <span className="background-span">{tag}</span>
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
            <IconPlus />
            1
            <IconMinus />
          </button>
          <button className="shopping-cart">
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
