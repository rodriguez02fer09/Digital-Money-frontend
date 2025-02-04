import React from 'react'
import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'
import Image from 'next/image'

const CardActivity = ({children, size}) => {
  if (!children) return

  const defaultCard = 'cardActivity'
  const customClass = classNames(defaultCard, {
    [`${defaultCard}--${size}`]: size,
  })

  return (
    <div className={customClass}>
      {size === 'ProfileData' ? (
        <div className="contain-header">
          <p>{'Tus datos'}</p>
        </div>
      ) : size === 'HistoryCard' ? (
        <div className="contain-header">
          <p>{'Tus tarjetas'}</p>
        </div>
      ) : (
        <div className="contain-header">
          <p>{'Tu actividad'}</p>
        </div>
      )}

      <div className="content">{children}</div>

      {size !== 'ProfileData' && size !== 'HistoryCard' && (
        <div className="contain-footer">
          <p className="parrafo">Ver toda tu actividad</p>
          <Image
            src="/images/arrowBlack.svg"
            width={14}
            height={22}
            alt="Arrow"
          />
        </div>
      )}
    </div>
  )
}

export default CardActivity
