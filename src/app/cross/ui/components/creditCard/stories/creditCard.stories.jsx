import '../../../../sass/_variables.scss'
import '../styles/desktop.scss'
import CreditCard from '../index'

export default {
  component: CreditCard,
  title: 'CreditCard',
  size: {
    options: ['cardEmpty', 'cardFilled'],
    control: {type: 'radio'},
  },
}

const Template = args => <CreditCard {...args} />

export const cardEmpty = Template.bind({})
cardEmpty.args = {
  size: 'cardEmpty',
}

export const cardFilled = Template.bind({})
cardFilled.args = {
  size: 'cardFilled',
}
export const grey = Template.bind({})
grey.args = {
  color: 'grey',
}
