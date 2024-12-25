'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import MenuDesplegable from '../../../../../cross/ui/components/menuDesplegable'
import getDataLocalStore from '../../../../../cross/core/uses-cases/getDataLocalStore'
import CardBlack from '../../../../../cross/ui/components/cardBlack'
import AvailableMoneyCard from '../../../../../cross/ui/components/availableMoneyCard'

const CWDasboard = () => {
  const defaultClass = 'dashboard'
  const [account, setAccount] = useState(0)

  useEffect(() => {
    debugger
    setAccount(() => JSON.parse(getDataLocalStore('account')))
    console.log(account)
  }, [])

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}__layout`}>
        <div className={`${defaultClass}__containMenuDesplegable`}>
          <MenuDesplegable />
        </div>
        <div className={`${defaultClass}__content`}>
          <div className={`${defaultClass}__contain-card-black`}>
            <CardBlack size="AvailableAmountCard">
              <AvailableMoneyCard />
            </CardBlack>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CWDasboard
