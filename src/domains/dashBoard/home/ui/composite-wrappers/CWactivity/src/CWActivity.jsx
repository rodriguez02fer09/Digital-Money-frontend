import '../index.scss'
import {useEffect} from 'react'
import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'
import CardActivity from '@domains/cross/ui/components/cardActivity'
import ListActivity from '@domains/dashBoard/home/ui/components/listActivity'
import useActivity from '@domains/dashBoard/home/core/hooks/useActivity/src/useActivity'

const CWActivity = () => {
  const defaultClass = 'activity-money-component'

  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(
    searchParams.get('search') || '',
  )

  useEffect(() => {
    setSearchValue(searchParams.get('search') || '')
  }, [searchParams])

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newParams = new URLSearchParams(searchParams.toString())
      newParams.set('search', searchValue)
      router.push(`/dashBoard/activity/list?${newParams.toString()}`)
    }
  }
  return (
    <>
      <div className={defaultClass}>
        <InputSearch
          type="text"
          placeholder="Busca una actividad"
          onChange={setSearchValue}
          onKeyDown={handleKeyDown} // Pasa la función para detectar Enter
        />
      </div>
    </>
  )
}
export default CWActivity
