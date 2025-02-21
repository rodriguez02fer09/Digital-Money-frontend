'use client'
import React from 'react'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'
import request from '@domains/cross/core/uses-cases/request'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

const TransferDestination = () => {
  const {user: perfil, updateUser, account} = useAccount()
  const {id: account_id, cvu} = account ?? {}

  const selectedCard = JSON.parse(localStorage.getItem('selectedCard'))
  const amountToDeposit = JSON.parse(localStorage.getItem('amountToDeposit'))

  const cvuValue = cvu ?? 'No disponible'

  const transferData = {
    amount: amountToDeposit,
    dated: new Date().toISOString(),
    destination: 'Cuenta Propia',
    origin: cvuValue,
  }
  const storedCvu = JSON.parse(localStorage.getItem('cvu')) ?? 'No disponible'

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
          <p>CVU: {cvuValue}</p>
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
