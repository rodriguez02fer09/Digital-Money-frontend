'use client'

import {useSearchParams} from 'next/navigation'
import {useState, useEffect} from 'react'
import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'

const SearchServices = ({onFilter}) => {
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(
    searchParams.get('search') || '',
  )

  useEffect(() => {
    onFilter(searchValue)
  }, [searchValue, onFilter]) // ✅ Agregado `onFilter`

  return (
    <InputSearch
      type="text"
      placeholder="Busca un servicio"
      onChange={setSearchValue}
    />
  )
}

export default SearchServices
