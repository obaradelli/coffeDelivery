import { DivContainer, ContainerCard } from './styles'

import { Card } from './components/Card'

import { dataFake } from '../../../../database/fakeCoffee'

export function CoffeeList() {
  return (
    <DivContainer>
      <h2>Nossos Cafés</h2>
      <ContainerCard>
        {dataFake.map((coffee) => (
          <Card coffee={coffee} />
        ))}
      </ContainerCard>
    </DivContainer>
  )
}
