import '../../../sass/_variables.scss'
import '../styles/desktop.scss'

const Input = ({type, value, placeholder, onChange, label, className}) => {
  const defaultClass = 'prompt-input'
  return (
    <div className={`${defaultClass} ${defaultClass}--container`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${defaultClass} ${defaultClass}__${type} ${className}`}
      />
    </div>
  )
}

export default Input
