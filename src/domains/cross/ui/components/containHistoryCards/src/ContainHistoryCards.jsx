import '../styles/desktop.scss'
import {useEffect, useState} from 'react'
import ItemHistoryCards from '@domains/cross/ui/components/itemHistoryCards/src/ItemHistoryCards'

import request from '@domains/cross/core/uses-cases/request'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

const ContainHistoryCards = ({cards = [], updateCards, selected}) => {
  const defaultHistory = 'contain-history-cards'
  const [currentId, setCurrentId] = useState()

  const deleteCardsCallback = () => {}

  useEffect(() => {
    const r = cards.filter(c => c.id !== currentId)
    updateCards(r)
  }, [currentId])

  const handlerOnClick = card => {
    const {number_id, account_id, cod, expiration_date, first_last_name, id} =
      card ?? {}
    debugger
    setCurrentId(() => id)
    request(
      {
        path: `accounts/${account_id}/cards/${id}`,
        method: 'DELETE',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
        data: null,
      },
      deleteCardsCallback,
    )
  }

  return (
    <div className={defaultHistory}>
      {cards?.length > 0 ? (
        cards?.map(card => (
          <ItemHistoryCards
            key={card.id}
            card={card}
            handlerOnClick={handlerOnClick}
            key={card.id}
            selected={selected}
          />
        ))
      ) : (
        <p>No tienes tarjetas asociadas</p>
      )}
    </div>
  )
}

export default ContainHistoryCards
