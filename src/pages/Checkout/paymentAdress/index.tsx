import { Box, DivEndereco, DivPagamento } from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { useAdress } from '../../../hooks/useAdress'

type paymentForm = 'Cartão de Credíto' | 'Cartão de Débito' | 'Dinheiro'

export function Frame1() {
  const [paymentForm, setPaymentForm] =
    useState<paymentForm>('Cartão de Credíto')

  const {
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    changeCep,
    changeRua,
    changeNumero,
    changeComplemento,
    changeBairro,
    changeCidade,
    changeUf,
  } = useAdress()
  const { colors } = useTheme()

  const { setFocus } = useForm()

  const checkCep = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        changeRua(data.logradouro)
        changeBairro(data.bairro)
        changeCidade(data.localidade)
        changeUf(data.uf)
        setFocus('number')
      })
  }

  function setFormaPagamento(
    formaPagamento: 'Cartão de Credíto' | 'Cartão de Débito' | 'Dinheiro'
  ) {
    setPaymentForm(formaPagamento)
    localStorage.setItem('pagamento', formaPagamento)
  }

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
                <form className="infos">
                  <input
                    className="cep"
                    type="cel"
                    value={cep}
                    onChange={(e) => changeCep(e.target.value)}
                    placeholder="CEP"
                    onBlur={checkCep}
                  />
                  <input
                    className="rua"
                    type="text"
                    value={rua}
                    onChange={(e) => changeRua(e.target.value)}
                    placeholder="Rua"
                  />
                  <div>
                    <div className="infos-2">
                      <input
                        className="numero"
                        type="number"
                        value={numero}
                        onChange={(e) => changeNumero(e.target.value)}
                        placeholder="Número"
                      />
                      <input
                        className="complemento"
                        type="text"
                        value={complemento}
                        onChange={(e) => changeComplemento(e.target.value)}
                        placeholder="Complemento"
                      />
                    </div>
                    <div className="infos-3">
                      <input
                        className="bairro"
                        type="text"
                        value={bairro}
                        onChange={(e) => changeBairro(e.target.value)}
                        placeholder="Bairro"
                      />
                      <input
                        className="cidade"
                        value={cidade}
                        onChange={(e) => changeCidade(e.target.value)}
                        placeholder="Cidade"
                      />
                      <div>
                        <input
                          className="uf"
                          type="text"
                          value={uf}
                          onChange={(e) => changeUf(e.target.value)}
                          placeholder="UF"
                        />
                      </div>
                    </div>
                  </div>
                </form>
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
                  <button
                    className="card"
                    style={{
                      border:
                        paymentForm === 'Cartão de Credíto'
                          ? `2px solid ${colors['purple-']}`
                          : '2px solid transparent',
                    }}
                    onClick={() => setFormaPagamento('Cartão de Credíto')}
                  >
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
                  <button
                    className="card"
                    style={{
                      border:
                        paymentForm === 'Cartão de Débito'
                          ? `2px solid ${colors['purple-']}`
                          : '2px solid transparent',
                    }}
                    onClick={() => setFormaPagamento('Cartão de Débito')}
                  >
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
                  <button
                    className="card"
                    style={{
                      border:
                        paymentForm === 'Dinheiro'
                          ? `2px solid ${colors['purple-']}`
                          : '2px solid transparent',
                    }}
                    onClick={() => setFormaPagamento('Dinheiro')}
                  >
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
