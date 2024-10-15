import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import CardBlack from '../index'

export default {
  component: CardBlack,
  title: 'CardBlack', // El título de tu componente en Storybook
  argTypes: {
    size: {
      options: ['AvailableAmountCard', 'AddCard', ' MoneyTransfer'], // Asegúrate de que estos nombres tengan sentido
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
  size: 'AvailableAmountCard', // Establecer un tamaño por defecto si es necesario
}

export const MoneyTransfer = Template.bind({})
MoneyTransfer.args = {
  color: 'black',
  size: 'MoneyTransfer', // Puedes ajustar el tamaño o dejarlo como 'small' si es más relevante
}
export const AddCard = Template.bind({})
AddCard.args = {
  color: 'black',
  size: 'AddCard', // Establecer un tamaño por defecto si es necesario
}
