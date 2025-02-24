import React from 'react'
import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'
import Image from 'next/image'

const CardActivity = ({children, size, paginate}) => {
  if (!children) return null

  const defaultCard = 'cardActivity'
  const customClass = classNames(defaultCard, {
    [`${defaultCard}--${size}`]: size,
  })

  return (
    <div className={customClass}>
      <div className="contain-header">
        <p>
          {size === 'ProfileData'
            ? 'Tus datos'
            : size === 'HistoryCard'
            ? 'Tus tarjetas'
            : size === 'Services'
            ? 'Más recientes'
            : 'Tu actividad'}
        </p>
      </div>

      <div className="content">{children}</div>

      {size !== 'ProfileData' &&
        size !== 'HistoryCard' &&
        size !== 'Services' && (
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
