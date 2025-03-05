'use client'
import '../styles/main.scss'
import {useState, useEffect} from 'react'

import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ItemServices from '@domains/dashBoard/paymentService/list/ui/components/itemServices/src/ItemServices'

const HistoryServices = ({searchQuery}) => {
  const [services, setServices] = useState([])

  const [isSelected, setIsSelected] = useState(null)

  useEffect(() => {
    const storedService = JSON.parse(localStorage.getItem('selectedService'))
    if (storedService) {
      setIsSelected(storedService)
    }
  }, [])

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

  const handleSelect = id => {
    setIsSelected(id)
    localStorage.setItem('selectedService', JSON.stringify(id))
    window.location.href = '/dashBoard/paymentService/accountStep/stepNumber'
  }

  return (
    <CardActivity size="Services">
      {filteredServices.length > 0 ? (
        filteredServices.map(service => (
          <ItemServices
            key={service.id}
            service={service}
            isSelected={isSelected}
            handleSelect={handleSelect}
          />
        ))
      ) : (
        <p>No hay servicios disponibles.</p>
      )}
    </CardActivity>
  )
}

export default HistoryServices
