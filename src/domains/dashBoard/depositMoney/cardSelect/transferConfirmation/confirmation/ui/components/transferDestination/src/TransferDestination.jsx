'use client'
import React from 'react'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'
import request from '@domains/cross/core/uses-cases/request'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

const TransferDestination = () => {
  const {account} = useAccountStore()
  const {id: account_id} = account ?? {}

  const transferData = {
    amount: 130,
    dated: '2025-02-17T16:34:00Z',
    destination: 'camilo Perez',
    origin: '655708393934923884',
  }

  const callBackTransfer = result => {
    console.log('Transferencia respuesta:', result)
    if (!result.error) {
      
      window.location.href =
        '/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove'
    } else {
      console.error('Error en la transferencia:', result.error)

    }
  }

  const requestDeposits = () => {
    request(
      {
        path: `accounts/${account_id}/deposits`,
        method: 'POST',
        data: transferData,
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      },
      callBackTransfer,
    )
  }

  
  const handleDestination = () => {
    requestDeposits()
  }

  const defaultDestination = 'transfer-destination'
  return (
    <div className={`${defaultDestination}`}>
      <div className={`${defaultDestination}--destination`}>
        <p>Para</p>
        <p>Cuenta propia</p>
      </div>
      <div className={`${defaultDestination}--account`}>
        <div className={`${defaultDestination}__info`}>
          <p>Brubank</p>
          <p>CVU: 0000002100075990000000</p>
        </div>
        <div className={`${defaultDestination}__button`}>
          <Button
            size="large"
            color="green"
            label="Continuar"
            onClick={handleDestination}
          />
        </div>
      </div>
    </div>
  )
}

export default TransferDestination
