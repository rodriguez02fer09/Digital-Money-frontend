import React from 'react'
import '../../../../sass/variables.scss'

import '../styles/desktop.scss'
import classNames from 'classnames'

const CreditCard = ({children, size, color}) => {
  const defaultCard = 'creditCard'
  if (!children) return null
  const customClass = classNames(defaultCard, {
    [`${defaultCard}--${size}`]: size,
    [`${defaultCard}--${color}`]: color,
  })

  return <div className={customClass}>{children}</div>
}

export default CreditCard
