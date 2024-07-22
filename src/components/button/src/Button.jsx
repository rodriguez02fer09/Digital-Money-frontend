// src/componentes/button/Button.js
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import '../style/desktop.scss' // Asegúrate de tener este archivo de estilos

const Button = ({type, label, onClick, href}) => {
  const defaultButton = 'button'

  if (href) {
    return (
      <Link
        className={`${defaultButton} ${defaultButton}--${type}`}
        href={href}
      >
        {label}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${defaultButton} ${defaultButton}--${type}`}
    >
      {label}
    </button>
  )
}

export default Button
