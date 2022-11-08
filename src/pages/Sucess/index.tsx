import { DivContainer } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import Illustration from '../../assets/Illustration.svg'
import { ThemeConsumer } from 'styled-components'

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
        <div className="infos">
          <div className="infos2">
            <div className="entrega">
              <div className="item">
                <div className="img">
                  <MapPin color="#fff" weight="fill" />
                </div>
                <div>
                  <h3>
                    Entrega em <h4> Rua João Daniel Martinelli, 102</h4>
                  </h3>
                  <div className="separator">
                    <p>Farrapos - Porto Alegre, RS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="entrega">
              <div className="item">
                <div className="img-2">
                  <Timer color="#fff" weight="fill" />
                </div>
                <div>
                  <h3>Previsão de entrega</h3>
                  <div className="separator">
                    <p>
                      <h4>20 min - 30 min</h4>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="entrega">
              <div className="item">
                <div className="img-3">
                  <CurrencyDollar color="#fff" weight="fill" />
                </div>
                <div>
                  <h3>Pagamento na entrega</h3>
                  <div className="separator">
                    <p>
                      <h4>Cartão de crédito</h4>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Illustration} />
        </div>
      </div>
    </DivContainer>
  )
}
