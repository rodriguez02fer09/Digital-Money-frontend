import '../styles/desktop.scss'
import classNames from 'classnames'
const InputSearch = ({
  size,
  value,
  placeholder,
  onChange,
  label,
  className = '',
}) => {
  const defaultClass = 'container-SearchPrompt'

  const inputSearchClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
  })

  return (
    <div className={`${inputSearchClass}`}>
      <input
        size={size}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${inputSearchClass}`}
      />
      <img
        src="/images/search.svg"
        alt="Search icon"
        className={`${inputSearchClass} `}
      />
    </div>
  )
}

export default InputSearch
