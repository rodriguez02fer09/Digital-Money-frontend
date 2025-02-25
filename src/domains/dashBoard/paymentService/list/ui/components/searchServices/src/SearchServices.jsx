import '../styles/main.scss'

import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'

const SearchServices = ({placeholder, setSearchQuery}) => {
  const handleInputChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <InputSearch
        type="text"
        placeholder="Buscá entre más de 5.000 empresas"
        onChange={handleInputChange}
      />
    </div>
  )
}
export default SearchServices
