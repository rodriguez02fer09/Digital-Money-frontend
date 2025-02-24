import '../styles/main.scss'

const ItemServices = ({service}) => {
  const defaultNameCard = 'name-card'

  const {id, name, date} = service ?? {}

  return (
    <div className={defaultNameCard}>
      <div className={`${defaultNameCard}__containItem`}>
        <div className={`${defaultNameCard}--containImg`}></div>
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
