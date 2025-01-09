'use client'
import '../styles/main.scss'
import Image from 'next/image'

import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'

const FilterForm = () => {
  const customClass = 'filter-form'
  return (
    <div className={customClass}>
      <div className={`${customClass}__input`}>
        <InputSearch type="text" placeholder="Busca tu actividad" />
      </div>
      <div className={`${customClass}__button`}>
        <button type="submit">
          <Image
            src="/images/filtrar.svg"
            width={22}
            height={22}
            alt="Filtrar"
          />
          Filtrar
        </button>
      </div>
    </div>
  )
}

export default FilterForm
