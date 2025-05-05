'use client'
import '../styles/main.scss'

import {useEffect, useState} from 'react'

import CardActivity from '@domains/cross/ui/components/cardActivity'
import ContainHistoryCards from '@domains/cross/ui/components/containHistoryCards'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import request from '@domains/cross/core/uses-cases/request'

const MAX_CARDS = 10

const HistoryCards = ({selected = false, handleCards}) => {
  const {account} = useAccount()
  const accountId = account?.id
  const [cards, setCards] = useState([])

  useEffect(() => {
    handleCards(cards)
  }, [cards, handleCards])

  useEffect(() => {
    if (!accountId) return

    request(
      {
        path: `accounts/${accountId}/cards`,
        method: 'GET',
        addHeaders: {Authorization: getDataLocalStore('token')},
        data: null,
      },
      setCards,
    )
  }, [accountId])

  const updateCards = newCards => {
    setCards(newCards)
  }

  return (
    <div className="history-Cards">
      {cards.length === MAX_CARDS && (
        <p className="max-cards-message">
          Has alcanzado el límite máximo de {MAX_CARDS} tarjetas.
        </p>
      )}
      <CardActivity size="HistoryCard">
        <ContainHistoryCards
          cards={cards}
          updateCards={updateCards}
          selected={selected}
        />
      </CardActivity>
    </div>
  )
}

export default HistoryCards
