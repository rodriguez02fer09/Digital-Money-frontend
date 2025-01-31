'use client'
import '../styles/main.scss'
import Image from 'next/image'
import {useState, useEffect} from 'react'

import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'
import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ListActivity from '@domains/dashBoard/home/ui/components/listActivity/src/ListActivity'
import ModalFilter from '@domains/dashBoard/activity/list/ui/components/modalFilter/src/ModalFilter'
import useActivity from '@domains/dashBoard/home/core/hooks/useActivity/src/useActivity'
import filterUpWord from '@domains/dashBoard/activity/list/core/uses-cases/filterUpWork'

const FilterForm = ({slug, showButton}) => {
  const {activity, updateStateActivity} = useActivity({searchItem: slug})

  const [filterActivity, setFilterActivity] = useState([])

  useEffect(() => {
    setFilterActivity(filterUpWord(activity, 'Deposito'))
  }, [activity])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const customClass = 'filter-form'
  debugger
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
            <button type="submit" onClick={toggleModal}>
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
      <div className="filter-form__activity">
        <CardActivity size="Activity">
          {filterActivity.length > 0 ? (
            <ListActivity activity={filterActivity} />
          ) : (
            <p>No hay actividades disponibles</p>
          )}
        </CardActivity>
      </div>
      <ModalFilter isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default FilterForm
