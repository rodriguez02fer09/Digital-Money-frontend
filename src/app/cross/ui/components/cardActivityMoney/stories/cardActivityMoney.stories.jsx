// src/app/cross/ui/components/cardActivityMoney/stories/cardActivityMoney.stories.jsx
import CardActivityMoney from '../index' // Asegúrate de que la ruta sea correcta

export default {
  component: CardActivityMoney,
  title: 'CardActivityMoney',
  argTypes: {
    size: {
      options: ['ActivityMoney', 'HistoryCard'],
      control: {type: 'radio'},
    },
    color: {
      control: {type: 'color'},
    },
  },
}

const Template = args => <CardActivityMoney {...args} />

export const ActivityMoney = Template.bind({})
ActivityMoney.args = {
  color: 'white',
  size: 'ActivityMoney',
}

export const HistoryCard = Template.bind({})
HistoryCard.args = {
  color: 'black',
  size: 'HistoryCard',
}

// export const ProfileData = Template.bind({})
// ProfileData.args = {
//   color: 'black',
//   size: 'ProfileData',
// }
