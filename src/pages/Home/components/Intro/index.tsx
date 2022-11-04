import coffeehome from '../../../../assets/coffeehome.svg'
import { Container, DivContainer, BoxIcon } from './styles'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <Container>
      <DivContainer>
        <div>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          </div>
          <div className="sub-title">
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
          </div>
        </div>

        <div className="items">
          <div className="box-master">
            <div className="box">
              <BoxIcon bgColor={colors['yellow-dark']}>
                <ShoppingCart size={16} weight="fill" color="white" />
              </BoxIcon>
              <p>Compra simples e segura</p>
            </div>
            <div className="box">
              <BoxIcon bgColor={colors['base-text']}>
                <Package size={16} weight="fill" color="white" />
              </BoxIcon>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>

          <div className="box-master">
            <div className="box">
              <BoxIcon bgColor={colors['yellow-']}>
                <Timer size={16} weight="fill" color="white" />
              </BoxIcon>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="box">
              <BoxIcon bgColor={colors['purple-']}>
                <Coffee size={16} weight="fill" color="white" />
              </BoxIcon>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </DivContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={coffeehome} />
      </div>
    </Container>
  )
}
