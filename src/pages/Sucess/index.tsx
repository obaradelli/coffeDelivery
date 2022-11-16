import { DivContainer } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import Illustration from '../../assets/Illustration.svg'
import { ThemeConsumer } from 'styled-components'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useAdress } from '../../hooks/useAdress'

type PaymentType = 'Cartão de Credíto' | 'Cartão de Débito' | 'Dinheiro' | ''

interface AdressProps {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  changeCep: string
  changeRua: string
  changeNumero: string
  changeComplemento: string
  changeBairro: string
  changeCidade: string
  changeUf: string
}

export function Sucess() {
  const { clearCart } = useCart()
  const { adress, clearAddress } = useAdress()
  const [payment, setPaymant] = useState<PaymentType>('')

  function setToLocalPayment() {
    const paymentStorage = localStorage.getItem('pagamento') as PaymentType

    if (!paymentStorage) return

    setPaymant(paymentStorage)
  }

  useEffect(() => {
    setToLocalPayment()
  }, [])

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
                    Entrega em{' '}
                    <h4>
                      {adress?.rua}, {adress?.numero}
                    </h4>
                  </h3>
                  <div className="separator">
                    <p>
                      {adress?.bairro} - {adress?.cidade}, {adress?.uf}
                    </p>
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
                      <h4>{payment}</h4>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dpflex">
          <div>
            <img src={Illustration} />
          </div>
          <div>
            <NavLink
              to="/"
              onClick={() => {
                clearAddress()
                clearCart()
              }}
            >
              <button>Cadastrar novo pedido</button>
            </NavLink>
          </div>
        </div>
      </div>
    </DivContainer>
  )
}
