'use client'
import currency from 'currency.js'

import '../index.scss'
import CardView from '@domains/cross/ui/components/cardView/src/CardView'
import CvuView from '@domains/cross/ui/components/cvuView/src/CvuView'
import TitleView from '@domains/cross/ui/components/titleView/src/TitleView'
import MoneyView from '@domains/cross/ui/components/moneyView/src/MoneyView'
import CardBlack from '@domains/cross/ui/components/CardBlack'

import {useAccount} from '@domains/cross/core/hoocks/useAccount/src/useAccount'

import CardOptions from '@domains/dashBoard/home/ui/components/cardOptions'

const AvailableMoneyCard = () => {
  const defaultClass = 'available-money-card'
  const {account, user} = useAccount()

  const {available_amount = 0} = account ?? {}

  const conversionRate = 0.042
  const amountInARS = currency(available_amount)
    .multiply(conversionRate)
    .format({
      symbol: 'ARS', // Puedes usar 'ARS' o el símbolo de pesos argentinos '₱'
      separator: '.', // Separador de miles
      decimal: ',', // Separador de decimales
      precision: 2, // Asegurarte de que tenga siempre dos decimales
      pattern: '# !', // Esto agrega un espacio entre el valor y la moneda
    })

  console.log(amountInARS)

  const options = [
    {text: 'Ver tarjetas', link: '#'},
    {text: 'Ver CVU', link: '#'},
  ]
  return (
    <CardBlack size="AvailableAmountCard">
      <div className={`${defaultClass}`}>
        <CardOptions options={options} />
        <div className={`${defaultClass}__title`}>
          <TitleView title="Dinero Disponible" />
        </div>
        <div className={`${defaultClass}__account`}>
          <MoneyView account={amountInARS} />
        </div>
      </div>
    </CardBlack>
  )
}

export default AvailableMoneyCard
