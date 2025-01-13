'use client'
import '../styles/main.scss'
import Image from 'next/image'
import {useState} from 'react'

import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'
import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ListActivity from '@domains/dashBoard/home/ui/components/listActivity/src/ListActivity'
import useActivity from '@domains/dashBoard/home/core/hooks/useActivity/src/useActivity'

const FilterForm = ({slug, showButton}) => {
  const {activity} = useActivity([])

  const customClass = 'filter-form'

  return (
    <div className={customClass}>
      <div className={`${customClass}__form`}>
        <div className={`${customClass}__form__input`}>
          <InputSearch
            slug={slug}
            type="text"
            placeholder="Busca tu actividad"
          />
        </div>
        {showButton && (
          <div className={`${customClass}__form__button`}>
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
        )}
      </div>
      <div className={`${customClass}__activity`}>
        <CardActivity size="Activity">
          <ListActivity activity={activity} />
        </CardActivity>
      </div>
    </div>
  )
}

export default FilterForm
