import { Box, DivEndereco, DivPagamento } from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Frame1() {
  const { colors } = useTheme()
  return (
    <>
      <div>
        <DivEndereco>
          <div>
            <h1>Complete seu pedido</h1>
          </div>
          <div>
            <div>
              <Box>
                <div className="endereço">
                  <MapPinLine
                    color={colors['yellow-dark']}
                    size={22}
                    weight="regular"
                    type="map-pin-line"
                  />
                  <div className="title">
                    <h2>Endereço de entrega</h2>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </div>
                <div className="infos">
                  <input className="cep" type="number" placeholder="CEP" />
                  <input className="rua" type="text" placeholder="Rua" />
                  <div>
                    <div className="infos-2">
                      <input
                        className="numero"
                        type="number"
                        placeholder="Número"
                      />
                      <input
                        className="complemento"
                        type="text"
                        placeholder="Complemento"
                      />
                    </div>
                    <div className="infos-3">
                      <input
                        className="bairro"
                        type="text"
                        placeholder="Bairro"
                      />
                      <input
                        className="cidade"
                        type="text"
                        placeholder="Cidade"
                      />
                      <div>
                        <input className="uf" type="text" placeholder="UF" />
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>
          <DivPagamento>
            <div className="endereço">
              <CurrencyDollar
                color={colors['purple-']}
                size={22}
                weight="regular"
                type="map-pin-line"
              />
              <div className="title">
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="formas-de-pagamento">
              <div className="direction">
                <div>
                  <button className="card">
                    <CreditCard
                      color={colors['purple-']}
                      size={22}
                      weight="regular"
                      type="map-pin-line"
                    />
                    CARTÃO DE CRÉDITO
                  </button>
                </div>
                <div>
                  <button className="card">
                    <Bank
                      color={colors['purple-']}
                      size={22}
                      weight="regular"
                      type="map-pin-line"
                    />
                    CARTÃO DE DÉBITO
                  </button>
                </div>
                <div>
                  <button className="card">
                    <Money
                      color={colors['purple-']}
                      size={22}
                      weight="regular"
                      type="map-pin-line"
                    />
                    DINHEIRO
                  </button>
                </div>
              </div>
            </div>
          </DivPagamento>
        </DivEndereco>
      </div>
    </>
  )
}
