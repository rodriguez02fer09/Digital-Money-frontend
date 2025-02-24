'use client'
import {useState, useEffect} from 'react'
import '../styles/main.scss'
import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ItemServices from '@domains/dashBoard/paymentService/list/ui/components/itemServices/src/ItemServices'

const Historyservices = () => {
  const baseUrl = 'https://digitalmoney.digitalhouse.com/service'
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch(baseUrl, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => {
        console.log('Service response:', data)
        setServices(data)
      })
      .catch(err => console.error('API error:', err))
  }, [])

  return (
    <CardActivity size="Services">
      {services.length > 0 ? (
        services.map(service => (
          <ItemServices key={service.id} service={service} />
        ))
      ) : (
        <p>Cargando servicios...</p>
      )}
    </CardActivity>
  )
}

export default Historyservices
