import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { dataFakeSelection } from '../../../database/fakeSelection'
import { useAdress } from '../../../hooks/useAdress'
import { useCart } from '../../../hooks/useCart'
import { formatMoney } from '../../../utils/formatMoney'

import { CardCoffee } from './components/CardCoffee'
import {
  DivContainer,
  DivCardCoffee,
  IconPlus,
  IconMinus,
  IconTrash,
  Tabel,
} from './styles'

const DELIVERY_PRICE = 3.5

export const Frame2 = () => {
  const { adress } = useAdress()

  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <DivContainer>
      <div className="title">
        <h2>Cafés selecionados</h2>
      </div>
      <DivCardCoffee>
        <div className="box">
          {cartItems.map((item) => (
            <CardCoffee key={item.id} coffee={item} />
          ))}
          <Tabel>
            <div className="tabel">
              <div className="tabelaprice">
                <h3>Total de itens</h3>
                <p>{formattedItemsTotal}</p>
              </div>

              <div className="tabelaprice">
                <h3>Entrega</h3>
                <p>{formattedDeliveryPrice}</p>
              </div>

              <div className="total">
                <h3>Total</h3>
                <p>{formattedCartTotal}</p>
              </div>
            </div>
          </Tabel>

          <NavLink to="/" title="home">
            <div className="continuebuy">CONTINUAR COMPRANDO</div>
          </NavLink>

          {!cartItems.length || !!!adress.numero ? (
            <button title="sucess" className="buttonbuy">
              CONFIRMAR PEDIDO
            </button>
          ) : (
            <NavLink to="/sucess" title="sucess" className="buttonbuy">
              CONFIRMAR PEDIDO
            </NavLink>
          )}
        </div>
      </DivCardCoffee>
    </DivContainer>
  )
}
