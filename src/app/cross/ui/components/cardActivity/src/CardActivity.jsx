import React from 'react'
import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'

const CardActivity = ({children, size, titleActivity, titleFooter}) => {
  const defauldCard = 'cardActivity'
  const customClass = classNames(defauldCard, {
    [`${defauldCard}--${size}`]: size,
  })

  return (
    <div className={`${customClass}`}>
      <div className="contain-header">
        <p>{titleActivity}</p>
      </div>

      <div className="content">{children}</div>
      <div className="contain-footer">
        {/* //<p className="parrafo">{titleFooter}</p> */}
      </div>
    </div>
  )
}

export default CardActivity
