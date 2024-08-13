import '../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'

const Input = ({
  color,
  size,
  value,
  placeholder,
  onChange,
  label,
  className,
}) => {
  const defaultClass = 'container-input'

  const inputClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
    [`${defaultClass}--${color}`]: color,
  })
  return (
    <div className={`${inputClass}`}>
      <input
        size={size}
        color={color}
        placeholder={placeholder}
        className={`${inputClass}`}
      />
    </div>
  )
}

export default Input
