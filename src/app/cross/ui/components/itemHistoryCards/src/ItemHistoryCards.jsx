import '../styles/desktop.scss'
import Image from 'next/image'

const ItemHistoryCards = ({card, handlerOnClick}) => {
  const defaultNameCard = 'name-card'

  const {number_id, account_id, cod, expiration_date, first_last_name, id} =
    card ?? {}
  return (
    <div className="contain-ItemHistoryCards">
      <div className={defaultNameCard}>
        <div className={`${defaultNameCard}__containImg`}>
          <Image src="/images/point.svg" width={25} height={24} alt="Ícono" />
        </div>
        <div className={`${defaultNameCard}__nameActivity`}>
          <p>Terminada en {number_id}</p>
        </div>
      </div>
      <button onClick={() => handlerOnClick(card)}>Eliminar</button>
    </div>
  )
}

export default ItemHistoryCards
