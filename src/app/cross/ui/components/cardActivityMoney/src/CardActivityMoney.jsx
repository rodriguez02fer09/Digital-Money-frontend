import React from 'react'
import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'

const CardActivityMoney = ({size}) => {
  const defauldCard = 'cardActivityMoney'
  const customClass = classNames(defauldCard, {
    [`${defauldCard}--${size}`]: size,
  })

  return <div className={`${customClass}`}></div>
}

export default CardActivityMoney
