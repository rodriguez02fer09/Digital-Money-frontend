'use client'
import '../styles/main.scss'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {useSearchParams, useRouter} from 'next/navigation'
import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'
import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ListActivity from '@domains/dashBoard/home/ui/components/listActivity/src/ListActivity'
import ModalFilter from '@domains/dashBoard/activity/list/ui/components/modalFilter/src/ModalFilter'
import useActivity from '@domains/dashBoard/home/core/hooks/useActivity/src/useActivity'
import filterUpWork from '@domains/dashBoard/activity/list/core/uses-cases/filterUpWork'
import filterWithRangeDate from '@domains/dashBoard/activity/list/core/uses-cases/filterWithRangeDate'

const FilterForm = ({showButton}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const SearchQuery = searchParams.get('search') || ''
  const {activity, updateStateActivity} = useActivity(SearchQuery)
  const [searchQuery, setSearchQuery] = useState(SearchQuery)
  const [filterActivity, setFilterActivity] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setFilterActivity(filterUpWork(activity, searchQuery))
  }, [activity, searchQuery])

  useEffect(() => {
    console.log('Actividades filtradas actualizadas:', filterActivity)
  }, [filterActivity])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newParams = new URLSearchParams(searchParams.toString())
      newParams.set('search', searchQuery)
      router.push(`/dashBoard/activity/list?${newParams.toString()}`)
    }
  }

  const handleChange = value => {
    console.log('Valor ingresado:', value)
    setSearchQuery(value)
  }

  const handleFilter = selectedPeriod => {
    console.log('Actividad antes del filtrado:', activity)
    console.log('Período seleccionado:', selectedPeriod)

    const filteredData = filterWithRangeDate(
      filterUpWork(activity, searchQuery),
      selectedPeriod,
    )

    console.log('Datos filtrados:', filteredData)
    setFilterActivity(filteredData)
  }

  return (
    <div className="filter-form">
      <div className="filter-form__form">
        <div className="filter-form__form__input">
          <InputSearch
            type="text"
            placeholder="Busca tu actividad"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {showButton && (
          <div className="filter-form__form__button">
            <button type="button" onClick={toggleModal}>
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

      <ModalFilter
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        handleFilter={handleFilter}
      />
    </div>
  )
}

export default FilterForm
