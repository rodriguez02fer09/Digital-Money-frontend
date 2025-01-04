import '../styles/desktop.scss'
import ItemHistoryCards from '../../itemHistoryCards/src/ItemHistoryCards'

import request from '../../../../../cross/core/uses-cases/request'
import getDataLocalStore from '../../../../../cross/core/uses-cases/getDataLocalStore'

const ContainHistoryCards = ({cards = [], updateCards}) => {
  const defaultHistory = 'contain-history-cards'

  const deleteCardsCallback = currentCards => {
    updateCards(currentCards)
  }

  const handlerOnClick = card => {
    console.log(card)
    const {number_id, account_id, cod, expiration_date, first_last_name, id} =
      card ?? {}

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
      {cards.length > 0 ? (
        cards.map(card => (
          <ItemHistoryCards
            card={card}
            handlerOnClick={handlerOnClick}
            key={card.id}
          />
        ))
      ) : (
        <p>No tienes tarjetas asociadas</p>
      )}
    </div>
  )
}

export default ContainHistoryCards
