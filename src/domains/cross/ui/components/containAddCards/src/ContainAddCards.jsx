import '../styles/desktop.scss'
import ItemAddCards from '@domains/cross/ui/components/ItemAddCards/src/ItemAddCards'

const ContainAddCards = ({addCards, setAddCards, isDisabled}) => {
  const defaultAddCards = 'containAddCards'
  return (
    <div className={defaultAddCards}>
      <div className={`${defaultAddCards}__containTitle`}>
        <p>Agregá tu tarjeta de débito o crédito</p>
      </div>
      <ItemAddCards disabled={isDisabled} />
    </div>
  )
}

export default ContainAddCards
