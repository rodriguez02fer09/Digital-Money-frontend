'use client'
import '../styles/main.scss'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation' // 🔹 Mejor manejo de navegación en Next.js
import PayService from '@domains/dashBoard/paymentService/accountStep/stepSelectCard/ui/components/payService/src/PayService'
import CardSelect from '@domains/dashBoard/paymentService/accountStep/stepSelectCard/ui/components/cardSelect/src/CardSelect'
import Button from '@domains/cross/ui/components/button'
import request from '@domains/cross/core/uses-cases/request'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

const CWSelectCardService = () => {
  const router = useRouter()
  const {account} = useAccount()
  const {id: account_id} = account ?? {}

  const [serviceData, setServiceData] = useState({
    id: 0,
    name: '',
    date: '',
    invoice_value: '',
  })

  useEffect(() => {
    const storedServiceId = JSON.parse(localStorage.getItem('selectedService'))
    if (!storedServiceId) {
      console.error(
        '❌ No se encontró un ID de servicio válido en localStorage',
      )
      return
    }

    const baseUrl = `https://digitalmoney.digitalhouse.com/service/${storedServiceId}`

    fetch(baseUrl, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => {
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)
        return res.json()
      })
      .then(data => setServiceData(data))
      .catch(err => console.error('❌ API error:', err.message))
  }, [])

  const payData = {
    amount: -Math.abs(Number(serviceData.invoice_value)) || 0,
    dated: new Date().toISOString(),
    description: `Pago de ${serviceData.name}`,
  }

  const callBackServicePayment = result => {
    if (!result.error) {
      localStorage.setItem('payData', JSON.stringify(payData))
      router.push('/dashBoard/paymentService/accountStep/stepPayment')
    } else {
      console.error(' Error en la transacción:', result.error)
    }
  }

  const handlePaymentService = () => {
    if (!account_id) {
      console.error(' No se encontró un account_id válido')
      return
    }

    request(
      {
        path: `accounts/${account_id}/transactions`,
        method: 'POST',
        data: payData,
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      },
      callBackServicePayment,
    )
  }

  return (
    <>
      <PayService serviceData={serviceData} />
      <CardSelect />
      <div className="buton">
        <Button
          size="large"
          color="green"
          label="Pagar"
          onClick={handlePaymentService}
        />
      </div>
    </>
  )
}

export default CWSelectCardService
