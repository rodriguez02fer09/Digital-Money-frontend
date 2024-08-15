// src/componentes/button/Button.js
import React from 'react'
import classNames from 'classnames'
// import Link from 'next/link'
import '../style/desktop.scss' // Asegúrate de tener este archivo de estilos

const Button = ({size, color, label, onClick}) => {
  const defaultButton = 'button'

  const customClass = classNames(defaultButton, {
    [`${defaultButton}--${size}`]: size,
    [`${defaultButton}--${color}`]: color,
  })

  return (
    <button onClick={onClick} className={`${customClass}`}>
      {label}
    </button>
  )
}

export default Button
