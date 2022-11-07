import { IconMinus, IconPlus, IconTrash } from '../styles'

interface CoffeeProps {
  image: string
  name: string
  price: string
}

interface CardProps {
  coffee: CoffeeProps
}

export const CardCoffee = ({ coffee }: CardProps) => {
  return (
    <>
      <div className="card-coffe">
        <img className="coffe" src={coffee.image} />
        <div style={{ width: '100%' }}>
          <div className="title2">
            <h3>{coffee.name}</h3>
            <h4>R$ {coffee.price}</h4>
          </div>
          <div className="button">
            <button className="buttonItem">
              <IconMinus />
              <p>1</p>
              <IconPlus />
            </button>
            <button className="buttonItem2">
              <IconTrash />
              <p>REMOVER</p>
            </button>
          </div>
        </div>
      </div>
      <div className="separetor"></div>
    </>
  )
}
