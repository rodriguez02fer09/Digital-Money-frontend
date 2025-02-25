'use client'

import '../styles/desktop.scss'
import classNames from 'classnames'
import {useState, useEffect} from 'react'
import {useSearchParams, useRouter} from 'next/navigation'

const InputSearch = ({size, placeholder, label, className = '', onEnter}) => {
  const defaultClass = 'container-SearchPrompt'

  const inputSearchClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
  })

  const searchParams = useSearchParams()
  const router = useRouter()

  const [inputValue, setInputValue] = useState(searchParams.get('search') || '')

  useEffect(() => {
    setInputValue(searchParams.get('search') || '')
  }, [searchParams])

  const handleChange = e => {
    setInputValue(e.target.value)
    console.log('Input value:', e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()

      if (onEnter) {
        onEnter(inputValue) // Para `SearchServices` solo filtra
      } else {
        // Para `SearchActivity` redirige
        const newParams = new URLSearchParams(searchParams.toString())
        newParams.set('search', inputValue)
        router.push(`/dashBoard/activity/list?${newParams.toString()}`)
      }
    }
  }

  return (
    <div className={`${inputSearchClass}`}>
      <input
        type="text"
        size={size}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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
