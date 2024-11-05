import React from 'react'
import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'
import Image from 'next/image'

const CardActivity = ({children, size}) => {
  const defauldCard = 'cardActivity'
  const customClass = classNames(defauldCard, {
    [`${defauldCard}--${size}`]: size,
  })

  return (
    <div className={`${customClass}`}>
      <div className="contain-header">
        <p>Tu actividad</p>
      </div>

      <div className="content">{children}</div>
      <div className="contain-footer">
        <p className="parrafo">Ver toda tu actividad</p>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
      </div>
    </div>
  )
}

export default CardActivity
