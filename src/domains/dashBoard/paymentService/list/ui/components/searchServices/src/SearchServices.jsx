import '../styles/main.scss'

import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'

const SearchServices = ({setSearchQuery}) => {
  return (
    <InputSearch
      placeholder="Buscar servicio"
      onEnter={value => setSearchQuery(value)} // Solo actualiza el estado
    />
  )
}

export default SearchServices
