import '../styles/desktop.scss'
import classNames from 'classnames'
import {useState} from 'react'

const InputSearch = ({size, placeholder, label, className = '', slug}) => {
  const defaultClass = 'container-SearchPrompt'

  const inputSearchClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
  })

  const [inputValue, setInputValue] = useState(slug || '')

  const handleChange = e => {
    const value = e.target.value
    setInputValue(value)
    console.log('Input value:', value)
  }
  const hanDleKeyDown = e => {
    debugger
    if (e.key === 'Enter') {
      e.preventDefault()
      window.location.href = `/dashBoard/activity/list?search=${inputValue}`
    }
  }

  return (
    <div className={`${inputSearchClass}`}>
      <input
        slug={slug}
        type="text"
        size={size}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={hanDleKeyDown}
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
