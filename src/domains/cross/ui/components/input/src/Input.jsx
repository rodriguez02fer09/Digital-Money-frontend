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
  className,
  name,
  type,
  ...rest
}) => {
  const methods = useFormContext()
  const {register, formState, setValue} = methods || {} // Solo intenta destructurar si `methods` está disponible
  const errors = formState?.errors || {} // Maneja errores de manera segura

  const defaultClass = className ? className : 'container-input'
  const inputClass = classNames(defaultClass, {
    [`${defaultClass}--${size}`]: size,
    [`${defaultClass}--${color}`]: color,
  })

  return (
    <div className={inputClass}>
      <input
        {...(register ? register(name, registerData) : {})}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={inputClass}
      />

      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

Input.displayName = 'Input'

export default Input
