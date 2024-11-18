import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import CreditCard from '../index'

export default {
  component: CreditCard,
  title: 'CreditCard',
  argTypes: {
    size: {
      options: ['cardEmpty', 'cardFilled'],
      control: {type: 'radio'},
    },
    color: {
      options: ['grey', 'black'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <CreditCard {...args} />

export const cardEmpty = Template.bind({})
cardEmpty.args = {
  size: 'cardEmpty',
  color: 'grey',
}

export const cardFilled = Template.bind({})
cardFilled.args = {
  size: 'cardFilled',
  color: 'black',
}
