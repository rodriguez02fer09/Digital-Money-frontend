import React from 'react'
@use '../../../../sass/variables.scss';

import '../styles/desktop.scss'
import classNames from 'classnames'

const CardBlack = ({children, size}) => {
  if (!children) return null
  const defauldCard = 'cardBlack'
  const customClass = classNames(defauldCard, {
    [`${defauldCard}--${size}`]: size,
  })

  return <div className={`${customClass}`}>{children}</div>
}
export default CardBlack
