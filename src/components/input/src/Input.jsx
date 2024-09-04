import '../../../sass/_variables.scss'
import '../styles/desktop.scss'
import classNames from 'classnames'
import React from 'react'

const Input = React.forwardRef(
  (
    {
      color,
      size,
      value,
      placeholder,
      onChange,
      className,
      name,
      type,
      errors,
      ...rest
    },
    ref,
  ) => {
    const defaultClass = 'container-input'

    const inputClass = classNames(defaultClass, {
      [`${defaultClass}--${size}`]: size,
      [`${defaultClass}--${color}`]: color,
    })

    return (
      <div className={`${inputClass}`}>
        <input
          color={color}
          ref={ref}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${inputClass} ${className}`}
          onChange={onChange}
          {...rest}
        />
      </div>
    )
  },
)

export default Input
