import '../styles/desktop.scss'
import Search from '../../../../public/images/search.svg'

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
    <div className={`${defaultClass} ${defaultClass}--container`}>
      {label && <label className="prompt-label">{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${defaultClass} ${defaultClass}__${type} ${className}`}
      />
      <img
        className={`${defaultClass} ${defaultClass}--container-img`}
        src={Search}
        alt="Search icon"
      />
    </div>
  )
}

export default InputSearch
