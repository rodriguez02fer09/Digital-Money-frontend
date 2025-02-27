'use client'

import '../styles/desktop.scss'
import classNames from 'classnames'
import {useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'

const InputSearch = ({
  size,
  placeholder,
  className = '',
  onChange,
  onKeyDown,
}) => {
  const defaultClass = 'container-SearchPrompt'
  const inputSearchClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
  })

  const searchParams = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '')

  useEffect(() => {
    setInputValue(searchParams.get('search') || '')
  }, [searchParams])

  const handleChange = e => {
    setInputValue(e.target.value)
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className={inputSearchClass}>
      <input
        type="text"
        size={size}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className={`${inputSearchClass}__input`}
      />
      <img
        className={`${inputSearchClass}__img`}
        src="/images/search.svg"
        alt="Search icon"
        width={22}
        height={22}
      />
    </div>
  )
}

export default InputSearch
