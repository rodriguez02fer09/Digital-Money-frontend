'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import Button from '../../../../../cross/ui/components/button'
import InputSearch from '../../../../../cross/ui/components/InputSearch'
import MenuDesplegable from '../../../../../cross/ui/components/menuDesplegable'
import CardBlack from '../../../../../cross/ui/components/cardBlack'
import CardActivity from '../../../../../cross/ui/components/cardActivity'
import CardList from '../../../../../cross/ui/components/cardList'

import getDataLocalStore from '../../../../../cross/core/uses-cases/getDataLocalStore'

import AvailableMoneyCard from '../../../components/availableMoneyCard/src/AvailableMoneyCard'

const CWDasboard = () => {
  const defaultClass = 'dashboard'
  const [account, setAccount] = useState(0)

  useEffect(() => {
    setAccount(() => JSON.parse(getDataLocalStore('account')))
    console.log(account)
  }, [])

  return (
    <>
      <AvailableMoneyCard />

      <div className={`${defaultClass}__contain-buttons`}>
        <Button size="button-activity" label="Cargar dinero" color="green" />
        <Button
          size="button-activity"
          label="Pago de servicios"
          color="green"
        />
      </div>
      <div className={`${defaultClass}__contain-input`}>
        <InputSearch size="medium-prompt" placeholder="Busca tu actividad" />
      </div>
      <div className={`${defaultClass}__contain-activity`}>
        <CardActivity size="Activity">
          <CardList />
        </CardActivity>
      </div>
    </>
  )
}

export default CWDasboard
