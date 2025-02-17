import '../styles/desktop.scss'
import Image from 'next/image'

const ItemHistoryCards = ({card, handlerOnClick}) => {
  const defaultNameCard = 'name-card'

  // Desestructuramos las propiedades del objeto 'card'
  const {number_id, account_id, cod, expiration_date, first_last_name, id} =
    card ?? {}

  // Verificamos si 'number_id' está definido y es un número
  const lastFourNumbers = number_id ? number_id.toString().slice(-4) : '****'

  return (
    <div className={defaultNameCard}>
      <div className={`${defaultNameCard}__containItem`}>
        <div className={`${defaultNameCard}--containImg`}>
          <Image src="/images/point.svg" width={25} height={24} alt="Ícono" />
        </div>
        <div className={`${defaultNameCard}__nameActivity`}>
          <p>Terminada en {lastFourNumbers}</p>
        </div>
      </div>
      <button onClick={() => handlerOnClick(card)}>
        <label>Eliminar</label>
      </button>
    </div>
  )
}

export default ItemHistoryCards
