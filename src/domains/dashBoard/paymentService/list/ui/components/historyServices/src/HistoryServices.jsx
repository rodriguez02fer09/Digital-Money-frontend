import {useState, useEffect} from 'react'
import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ItemServices from '@domains/dashBoard/paymentService/list/ui/components/itemServices/src/ItemServices'

const HistoryServices = ({searchQuery}) => {
  const [services, setServices] = useState([])
  const baseUrl = 'https://digitalmoney.digitalhouse.com/service'

  useEffect(() => {
    fetch(baseUrl, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('API error:', err))
  }, [])

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <CardActivity size="Services">
      {filteredServices.length > 0 ? (
        filteredServices.map(service => (
          <ItemServices key={service.id} service={service} />
        ))
      ) : (
        <p>No hay servicios disponibles.</p>
      )}
    </CardActivity>
  )
}

export default HistoryServices
