import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import CardBlack from '../index'

export default {
  component: CardBlack,
  title: 'CardBlack', // El título de tu componente en Storybook
  argTypes: {
    size: {
      options: [
        'AvailableAmountCard',
        'AddCard',
        ' MoneyTransfer',
        'Detail',
        'DepositMoney',
        'SelectCard',
        'Account',
      ], // Asegúrate d
      e que estos nombres tengan sentido
      control: {type: 'radio'},
    },
    color: {
      control: {type: 'color'}, // Agregado para permitir selección de color en Storybook
    },
  },
}

const Template = args => <CardBlack {...args} />

export const AvailableAmountCard = Template.bind({})
AvailableAmountCard.args = {
  color: 'black',
  size: 'AvailableAmountCard',
}

export const MoneyTransfer = Template.bind({})
MoneyTransfer.args = {
  color: 'black',
  size: 'MoneyTransfer',
}
export const AddCard = Template.bind({})
AddCard.args = {
  color: 'black',
  size: 'AddCard',
}

export const Detail = Template.bind({})
Detail.args = {
  color: 'black',
  size: 'Detail',
}

export const DepositMoney = Template.bind({})
DepositMoney.args = {
  color: 'black',
  size: 'DepositMoney',
}

export const SelectCard = Template.bind({})
SelectCard.args = {
  color: 'black',
  size: 'SelectCard',
}

export const Account= Template.bind({})
Account.args = {
  color: 'black',
  size: 'Account',
}
