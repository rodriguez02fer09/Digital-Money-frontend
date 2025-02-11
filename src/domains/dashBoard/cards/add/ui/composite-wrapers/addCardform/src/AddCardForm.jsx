import React from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'
import '../styles/main.scss'
import Input from '@domains/cross/ui/components/input/src/Input'
import Button from '@domains/cross/ui/components/button/src/Button'

const Form = ({
  inputs = [],
  name,
  callBackOnSubmit,
  onInputChange,
  onInputFocus,
}) => {
  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = methods

  const defaultClass = 'form-add'
  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    callBackOnSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            registerData={{...register(input.name, input.registerData)}}
            errorMessage={errors[input.name]?.message}
            onChange={e => onInputChange(input.name, e.target.value)}
            onFocus={() => onInputFocus(input.name)}
          />
        ))}
        <Button size="large" label="Continuar" color="green" type="submit" />
      </form>
    </FormProvider>
  )
}

export default Form
