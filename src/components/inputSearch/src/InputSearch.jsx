import '../styles/desktop.scss'

const InputSearch = ({
  type = 'text',
  value,
  placeholder,
  onChange,
  label,
  className = '',
}) => {
  const defaultClass = 'prompt-search'

  return (
    <div className={`${defaultClass}`}>
      <div className={`${defaultClass}--container ${defaultClass}--${type}`}>
        {label && <label className="prompt-label">{label}</label>}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${defaultClass} ${defaultClass}__${type} ${className}`}
        />
        <img
          src="/images/search.svg"
          alt="Search icon"
          className={`${defaultClass} ${defaultClass}__${type}-icon`}
        />
      </div>
    </div>
  )
}

export default InputSearch
