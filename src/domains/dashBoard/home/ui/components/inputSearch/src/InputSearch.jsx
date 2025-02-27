'use client'

import '../styles/desktop.scss'
import classNames from 'classnames'
import {useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'

const InputSearch = ({
  size,
  placeholder,
  className = '',
  value,
  onChange,
  onKeyDown,
}) => {
  const handleInputChange = e => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className="container-SearchPrompt">
      <input
        type="text"
        size={size}
        value={value} // Asegura que el input muestra el valor correcto
        placeholder={placeholder}
        onChange={handleInputChange} // Maneja los cambios
        onKeyDown={onKeyDown}
        className="container-SearchPrompt__input"
      />
      <img
        className="container-SearchPrompt__img"
        src="/images/search.svg"
        alt="Search icon"
        width={22}
        height={22}
      />
    </div>
  )
}

export default InputSearch
