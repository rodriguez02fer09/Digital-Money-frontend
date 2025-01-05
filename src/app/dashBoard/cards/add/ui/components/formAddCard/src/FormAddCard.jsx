'use client'
import '../styles/main.scss'
import {useForm} from 'react-hook-form'
import Form from '../../../../data/forms/default'
import Input from '../../../../../../../cross/ui/components/input'

const FormAddCard = () => {
  return (
    <form
      onSubmit={handleSubmit(callBackOnSubmit)}
      className={`${defaultClass}__dateFormCard`}
    >
      {inputs.map(input => (
        <Input
          key={input.name}
          {...register(input.name, {
            required: `${input.placeholder} es obligatorio`,
          })}
          placeholder={input.placeholder}
          type={input.type}
          size="large"
          color="blue"
          error={errors[input.name]?.message}
        />
      ))}

      <div className={`${defaultClass}__contain-button`}>
        <Button size="large" label="Continuar" color="green" type="submit" />
      </div>
    </form>
  )
}
export default FormAddCard
