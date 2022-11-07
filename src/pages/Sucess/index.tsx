import { DivContainer } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import Illustration from '../../assets/Illustration.svg'

export function Sucess() {
  return (
    <DivContainer>
      <div className="geral">
        <div className="title">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
      </div>
      <div className="geral2">
        <div className="">
          <div>
            <p>
              <MapPin />
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </p>
          </div>
        </div>
        <div>
          <img src={Illustration} />
        </div>
      </div>
    </DivContainer>
  )
}
