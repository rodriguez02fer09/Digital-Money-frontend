import React from 'react'
import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'

const CardBlack = ({children, size}) => {
  const defauldCard = 'cardBlack'
  const customClass = classNames(defauldCard, {
    [`${defauldCard}--${size}`]: size,
  })

  return <div className={`${customClass}`}>{children}</div>
}
export default CardBlack
