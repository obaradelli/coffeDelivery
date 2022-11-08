import { DivContainer, ContainerCard } from './styles'

import { Card } from './components/Card'

import { dataFake } from '../../../../database/fakeCoffee'
import { useCart } from '../../../../hooks/useCart'

export function CoffeeList() {
  const { cartItems } = useCart()
  return (
    <DivContainer>
      <h2>Nossos Cafés</h2>
      <ContainerCard>
        {dataFake.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </ContainerCard>
    </DivContainer>
  )
}
