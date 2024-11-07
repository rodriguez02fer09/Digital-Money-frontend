import '../styles/desktop.scss'
import ItemAddCards from '../../ItemAddCards/src/ItemAddCards'

const ContainAddCards = () => {
  const defaultAddCards = 'containAddCards'
  return (
    <div className={`${defaultAddCards}`}>
      <div className={`${defaultAddCards}__containTitle`}>
        <p>Agregá tu tarjeta de débito o crédito</p>
      </div>
      <ItemAddCards />
    </div>
  )
}

export default ContainAddCards
