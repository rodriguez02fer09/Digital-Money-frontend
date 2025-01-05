import React from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import '../style/desktop.scss'

const Button = ({size, color, label, onClick}) => {
  const defaultButton = 'button'

  const customClass = classNames(defaultButton, {
    [`${defaultButton}--${size}`]: size,
    [`${defaultButton}--${color}`]: color,
  })

  return (
    <button onClick={onClick} className={`${customClass}`}>
      {label}

      {size === 'button-arrow' && (
        <Image
          className={`${defaultButton}__icon`}
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
      )}
    </button>
  )
}

export default Button
