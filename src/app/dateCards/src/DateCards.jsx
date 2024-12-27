'use client'

import {useForm} from 'react-hook-form'

import '../styles/desktop.scss'
import Input from '../../../app/cross/ui/components/input'
import Image from 'next/image'
import CardBlack from '../../../app/cross/ui/components/cardBlack'
import Button from '../../../app/cross/ui/components/button'
import CreditCard from '../../../app/cross/ui/components/creditCard'
import ContainCards from '../../../app/cross/ui/components/containCards'

const DateCards = () => {
  const defaultClass = 'date-cards'

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const callBackOnSubmit = data => {
    console.log(data)
    setAccount(data)
  }

  const inputs = [
    {name: 'numberCard', placeholder: 'Número de tarjera*', type: 'text'},
    {name: 'lastname', placeholder: 'Nombre y apellido*', type: 'text'},
    {
      name: 'fechaDeVencimiemto',
      placeholder: 'Fecha de vencimiemto*',
      type: 'number',
    },
    {
      name: 'CódigoDeSeguridad',
      placeholder: 'Código de seguridad*',
      type: 'number',
    },
  ]

  return (
    <main className={defaultClass}>
      <div className={`${defaultClass}__date-header`}>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
        <p>Tarjetas</p>
      </div>

      <div className={`${defaultClass}__containDateFormCard`}>
        <div className={`${defaultClass}__dateCard`}>
          <CreditCard size="cardEmpty" color="grey">
            <ContainCards />
          </CreditCard>
        </div>

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
            <Button
              size="large"
              label="Continuar"
              color="green"
              type="submit"
            />
          </div>
        </form>
      </div>
    </main>
  )
}

DateCards.displayName = 'dateCards'
export default DateCards
