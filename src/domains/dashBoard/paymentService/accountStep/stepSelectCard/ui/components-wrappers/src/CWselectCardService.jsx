'use client'
import '../styles/main.scss'
import {useEffect, useState} from 'react'
import PayService from '@domains/dashBoard/paymentService/accountStep/stepSelectCard/ui/components/payService/src/PayService'
import CardSelect from '@domains/dashBoard/paymentService/accountStep/stepSelectCard/ui/components/cardSelect/src/CardSelect' // Importamos el componente separado
import Button from '@domains/cross/ui/components/button'

const CWSelectCardService = () => {
  const [serviceData, setServiceData] = useState({
    id: 0,
    name: '',
    date: '',
    invoice_value: '',
  })

  useEffect(() => {
    const storedServiceId = JSON.parse(localStorage.getItem('selectedService'))
    console.log('ID almacenado en localStorage:', storedServiceId)

    if (!storedServiceId) {
      console.error('No se encontró un ID de servicio válido en localStorage')
      return
    }

    const baseUrl = `https://digitalmoney.digitalhouse.com/service/${storedServiceId}`
    console.log('URL de la API:', baseUrl)

    fetch(baseUrl, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(data => {
        console.log('Datos recibidos:', data)
        setServiceData(data)
      })
      .catch(err => console.error('API error:', err))
  }, [])

  const payData = {
    amount: 0,
    dated: 'string',
    description: 'string',
  }

  return (
    <>
      <PayService serviceData={serviceData} />
      <CardSelect />
      <div className="buton">
        <Button size="large" color="green" label="Pagar" />
      </div>
    </>
  )
}

export default CWSelectCardService
