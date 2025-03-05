'use client'
import '../index.scss'
import {useState} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'

const CWActivity = () => {
  const defaultClass = 'activity-money-component'
  const searchParams = useSearchParams()
  const router = useRouter()

  // Estado local para almacenar el valor del input
  const [searchValue, setSearchValue] = useState(
    searchParams.get('search') || '',
  )

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newParams = new URLSearchParams(searchParams.toString())
      newParams.set('search', searchValue)
      router.push(`/dashBoard/activity/list?${newParams.toString()}`)
    }
  }

  return (
    <div className={defaultClass}>
      <InputSearch
        type="text"
        placeholder="Busca una actividad"
        onChange={setSearchValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default CWActivity
