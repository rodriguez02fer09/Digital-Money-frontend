import '../styles/main.scss'
import Image from 'next/image'

const ItemServices = ({service, handleSelect, isSelected}) => {
  const defaultNameCard = 'name-card'
  const {id, name = 'Servicio sin nombre'} = service || {}
  const imageUrl = id ? `/services/${id}.svg` : `/images/default.svg`

  return (
    <div className={defaultNameCard}>
      <div className={`${defaultNameCard}__containItem`}>
        <div className={`${defaultNameCard}--containImg`}>
          <Image src={imageUrl} alt={name} width={40} height={40} />
        </div>
        <div className={`${defaultNameCard}--nameService`}>
          <p>{name}</p>
        </div>
      </div>

      <button
        onClick={() => handleSelect(id)}
        className={isSelected === id ? 'selected' : ''}
      >
        {isSelected === id ? 'Seleccionar' : 'Seleccionar'}
      </button>
    </div>
  )
}

export default ItemServices
