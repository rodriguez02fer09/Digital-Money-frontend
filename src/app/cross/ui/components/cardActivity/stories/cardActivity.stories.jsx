// src/app/cross/ui/components/cardActivityy/stories/cardActivity.stories.jsx
import CardActivity from '../index' // Asegúrate de que la ruta sea correcta

export default {
  component: CardActivity,
  title: 'CardActivity',
  argTypes: {
    size: {
      options: ['Activity', 'HistoryCard', 'ProfileData'],
      control: {type: 'radio'},
    },
    color: {
      control: {type: 'color'},
    },
  },
}

const Template = args => <CardActivity {...args} />

export const Activity = Template.bind({})
ActivityMoney.args = {
  color: 'white',
  size: 'Activity',
}

export const HistoryCard = Template.bind({})
HistoryCard.args = {
  color: 'black',
  size: 'HistoryCard',
}

export const ProfileData = Template.bind({})
ProfileData.args = {
  color: 'black',
  size: 'ProfileData',
}
