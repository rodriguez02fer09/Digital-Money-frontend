import '../styles/main.scss'
import Image from 'next/image'

const FilterForm = () => {
  const customClass = 'filter-form'
  return (
    <div className={customClass}>
      <div className={`${customClass}__input`}>
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className={`${customClass}__button`}>
        <button type="submit">
          <Image
            src="/images/filtrar.svg"
            width={22}
            height={22}
            alt="Filtrar"
          />
          Filter
        </button>
      </div>
    </div>
  )
}

export default FilterForm
