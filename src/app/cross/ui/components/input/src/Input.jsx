import React from 'react'
import classNames from 'classnames'

import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'

const Input = React.forwardRef(
  (
    {
      register,
      registerData,
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
    const {name: nameRegister, pattern} = registerData ?? {}
    const defaultClass = 'container-input'

    const inputClass = classNames(defaultClass, {
      [`${defaultClass}--${size}`]: size,
      [`${defaultClass}--${color}`]: color,
    })

    return (
      <div className={`${inputClass}`}>
        <input
          {...register(nameRegister, {
            ...registerData,
            pattern,
          })}
          color={color}
          ref={ref}
          type={type}
          id={nameRegister}
          name={nameRegister}
          value={value}
          placeholder={placeholder}
          className={`${inputClass}`}
          onChange={onChange}
          {...rest}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
