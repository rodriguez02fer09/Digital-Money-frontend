import '../styles/main.scss'

const ItemServices = ({service}) => {
  const defaultNameCard = 'name-card'

  const {id, name, date} = service ?? {}

  const imageUrl =
    id !== undefined ? `/services/${id}.svg` : `/images/default.svg`

  return (
    <div className={defaultNameCard}>
      <div className={`${defaultNameCard}__containItem`}>
        <div className={`${defaultNameCard}--containImg`}>
          <img
            src={imageUrl}
            alt={name || 'Servicio sin nombre'}
            width={70}
            height={30}
          />
        </div>
        <div className={`${defaultNameCard}__nameActivity`}>
          <p>{name || 'Servicio sin nombre'}</p>
        </div>
      </div>

      <button>
        <label>Seleccionar</label>
      </button>
    </div>
  )
}

export default ItemServices
