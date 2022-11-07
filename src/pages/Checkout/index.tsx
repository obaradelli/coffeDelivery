import { Frame2 } from './CoffeeSelection'
import { Frame1 } from './paymentAdress'

import { dataFakeSelection } from '../../database/fakeSelection'

export function Checkout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 108,
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <Frame1 />
      <Frame2 />
    </div>
  )
}
