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
import { AdressProps } from '../../../contexts/AdressContext'
import { NavLink } from 'react-router-dom'

type paymentForm = 'Cartão de Credíto' | 'Cartão de Débito' | 'Dinheiro'

export function Frame1() {
  const { adress, setEndereco, setValue } = useAdress()

  const [paymentForm, setPaymentForm] =
    useState<paymentForm>('Cartão de Credíto')

  const { colors } = useTheme()

  const { setFocus } = useForm()

  const checkCep = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        const dataAdress = {
          cep: cep,
          rua: data.logradouro,
          numero: '',
          complemento: '',
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
        }
        setFocus('number')
        setEndereco(dataAdress)
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
                    placeholder="CEP"
                    onBlur={checkCep}
                  />
                  <input
                    className="rua"
                    type="text"
                    value={adress?.rua}
                    onChange={(e) => setValue('rua', e.target.value)}
                    placeholder="Rua"
                  />
                  <div>
                    <div className="infos-2">
                      <input
                        className="numero"
                        type="number"
                        value={adress?.numero}
                        onChange={(e) => setValue('numero', e.target.value)}
                        placeholder="Número"
                      />
                      <input
                        className="complemento"
                        type="text"
                        value={adress?.complemento}
                        onChange={(e) =>
                          setValue('complemento', e.target.value)
                        }
                        placeholder="Complemento"
                      />
                    </div>
                    <div className="infos-3">
                      <input
                        className="bairro"
                        type="text"
                        value={adress?.bairro}
                        onChange={(e) => setValue('bairro', e.target.value)}
                        placeholder="Bairro"
                      />
                      <input
                        className="cidade"
                        value={adress?.cidade}
                        onChange={(e) => setValue('cidade', e.target.value)}
                        placeholder="Cidade"
                      />
                      <div>
                        <input
                          className="uf"
                          type="text"
                          value={adress?.uf}
                          onChange={(e) => setValue('uf', e.target.value)}
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
