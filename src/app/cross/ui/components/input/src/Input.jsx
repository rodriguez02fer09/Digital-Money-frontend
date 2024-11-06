import React from 'react'
import classNames from 'classnames'

import {useFormContext} from 'react-hook-form'

import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'

const Input = ({
  registerData,
  color,
  size,
  value,
  placeholder,
  onChange,
  className,
  name,
  type,
  ...rest
}) => {
  const {register, watch, formState} = useFormContext()
  const {errors} = formState
  const defaultClass = 'container-input'

  const inputClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
    [`${defaultClass}--${color}`]: color,
  })

  return (
    <div className={`${inputClass}`}>
      <input
        {...register(name, registerData)}
        color={color}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${inputClass}`}
        onChange={onChange}
        {...rest}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

Input.displayName = 'Input'

export default Input
