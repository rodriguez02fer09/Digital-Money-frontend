import React from 'react'
import '../styles/desktop.scss'
import classNames from 'classnames'
import Image from 'next/image'

const CardActivity = ({children, size, paginate, toggleModal}) => {
  if (!children) return null

  const defaultCard = 'cardActivity'
  const customClass = classNames(defaultCard, {
    [`${defaultCard}--${size}`]: size,
  })

  const isHomeRoute = window.location.pathname === '/dashBoard/home'
  const isActivityRoute = window.location.pathname === '/dashBoard/activity'
  const handleActivity = () => {
    window.location.href = '/dashBoard/activity'
  }

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

        {/* Botón oculto en /dashBoard/home */}
        {size === 'Activity' && !isHomeRoute && (
          <button className="mobile-only-button" onClick={toggleModal}>
            Filtrar
          </button>
        )}
      </div>

      <div className="content">{children}</div>

      {size !== 'ProfileData' &&
        size !== 'HistoryCard' &&
        size !== 'Services' &&
        !isActivityRoute && (
          <div className="contain-footer" onClick={handleActivity}>
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
