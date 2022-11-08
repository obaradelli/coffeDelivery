import { CoffeeProps } from '../../../../@types'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { IconMinus, IconPlus, IconTrash } from '../styles'

interface CardProps {
  coffee: CoffeeProps
}

export const CardCoffee = ({ coffee }: CardProps) => {
  const { cartItems, changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    if (coffee.quantity === 1) return

    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <>
      <div className="card-coffe">
        <img className="coffe" src={coffee.image} />
        <div style={{ width: '100%' }}>
          <div className="title2">
            <h3>{coffee.name}</h3>
            <h4>{formattedPrice}</h4>
          </div>
          <div className="button">
            <button className="buttonItem">
              <IconMinus onClick={handleDecrease} />
              <p>{coffee.quantity}</p>
              <IconPlus onClick={handleIncrease} />
            </button>
            <button className="buttonItem2" onClick={handleRemove}>
              <IconTrash />
              <p>REMOVER</p>
            </button>
          </div>
        </div>
      </div>
      <div className="separetor"></div>
    </>
  )
}
