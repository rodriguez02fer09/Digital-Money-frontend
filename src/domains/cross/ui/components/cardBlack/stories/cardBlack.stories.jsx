// styles
import '../../../../sass/variables.scss'
import '../styles/desktop.scss'
import CardBlack from '../index'

export default {
  component: CardBlack,
  title: 'CardBlack',
  argTypes: {
    size: {
      options: [
        'Account',
        'AddCard',
        'AproveInfo',
        'AvailableAmountCard',
        'DepositMoney',
        'Detail',
        'MoneyTransfer', // eliminado el espacio
        'PaymentService',
        'SelectCard',
        'TransferConfirmation',
      ],
      control: {type: 'radio'},
    },
    color: {
      control: {type: 'color'},
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

export const Account = Template.bind({})
Account.args = {
  color: 'black',
  size: 'Account',
}

export const TransferConfirmation = Template.bind({})
TransferConfirmation.args = {
  color: 'black',
  size: 'TransferConfirmation',
}

export const AproveInfo = Template.bind({})
AproveInfo.args = {
  color: 'black',
  size: 'AproveInfo',
}

export const PaymentService = Template.bind({})
PaymentService.args = {
  color: 'black',
  size: 'PaymentService',
}
