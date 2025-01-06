import '../styles/main.scss'

import {useEffect} from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'

import Input from '@domains/cross/ui/components/input/src/Input'
import Button from '@domains/cross/ui/components/button/src/Button'

const Form = ({
  inputs = [],
  className,
  name,
  callbackInputFocus,
  callBackOnSubmit,
}) => {
  const methods = useForm() // Inicializamos React Hook Form

  const defaultClass = className ? className : 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const handleInputFocus = e => {
    callbackInputFocus(e)
  }

  const onSubmit = data => {
    debugger
    console.log(data)
    callBackOnSubmit(data) // Llamamos al callback pasado como prop
  }

  useEffect(() => {
    const subscription = methods.watch((value, {name, type}) =>
      console.log(value, name, type),
    )
    return () => subscription.unsubscribe()
  }, [methods.watch])

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={methods.handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <Input
            className={defaultClass}
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            size={input.size}
            color={input.color}
            registerData={input.registerData}
            onFocus={handleInputFocus}
          />
        ))}

        <Button size="large" label="Continuar" color="green" type="submit" />
      </form>
    </FormProvider>
  )
}

export default Form
