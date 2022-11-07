import { NavLink } from 'react-router-dom'
import { dataFakeSelection } from '../../../database/fakeSelection'

import { CardCoffee } from './components/CardCoffee'
import {
  DivContainer,
  DivCardCoffee,
  IconPlus,
  IconMinus,
  IconTrash,
  Tabel,
} from './styles'

export const Frame2 = () => {
  return (
    <DivContainer>
      <div className="title">
        <h2>Cafés selecionados</h2>
      </div>
      <DivCardCoffee>
        <div className="box">
          {dataFakeSelection.map((banana) => (
            <CardCoffee coffee={banana} />
          ))}
          <Tabel>
            <div className="tabel">
              <div className="tabelaprice">
                <h3>Total de itens</h3>
                <p>R$ 29,70</p>
              </div>
              <div className="tabelaprice">
                <h3>Entrega</h3>
                <p>R$ 3,50</p>
              </div>
              <div className="total">
                <h3>Total</h3>
                <p>R$ 33,20</p>
              </div>
            </div>
          </Tabel>
          <NavLink to="/sucess" title="sucess" className="buttonbuy">
            CONFIRMAR PEDIDO
          </NavLink>
        </div>
      </DivCardCoffee>
    </DivContainer>
  )
}
