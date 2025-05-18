'use client'

import '../styles/desktop.scss'
import classNames from 'classnames'
import {useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import Image from 'next/image' // ✅ Importar Image de next/image

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
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        className="container-SearchPrompt__input"
      />
      <Image
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
