// styles
import '../../../../sass/variables.scss'
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

export const CardEmpty = Template.bind({})
CardEmpty.args = {
  size: 'cardEmpty',
  color: 'grey',
}

export const CardFilled = Template.bind({})
CardFilled.args = {
  size: 'cardFilled',
  color: 'black',
}
