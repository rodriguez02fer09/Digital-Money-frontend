'use client'
import '../styles/main.scss'

import {useEffect, useState} from 'react'

import CardActivity from '@domains/cross/ui/components/cardActivity'
import ContainHistoryCards from '@domains/cross/ui/components/containHistoryCards'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import request from '@domains/cross/core/uses-cases/request'

const defaultHistory = 'history-Cards'

// debe ser un warpper
const HistoryCards = () => {
  const {account} = useAccount()
  const {id: accountId} = account ?? {}
  const [cards, setCards] = useState()

  const getCardsCallback = currentCards => {
    setCards(() => currentCards)
  }

  useEffect(() => {
    if (account !== null) {
      request(
        {
          path: `accounts/${accountId}/cards`,
          method: 'GET',
          addHeaders: {
            Authorization: getDataLocalStore('token'),
          },
          data: null,
        },
        getCardsCallback,
      )
    }
  }, [account])

  const updateCards = cards => {
    setCards(cards)
  }

  return (
    <div className={defaultHistory}>
      <CardActivity size="HistoryCard">
        <ContainHistoryCards cards={cards} updateCards={updateCards} />
      </CardActivity>
    </div>
  )
}

export default HistoryCards
