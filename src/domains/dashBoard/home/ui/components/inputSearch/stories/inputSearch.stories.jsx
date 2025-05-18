import InputSearch from '../index'
// styles
import '../../../../sass/variables.scss'

export default {
  component: InputSearch,
  title: 'InputSearch',
  argTypes: {
    size: {
      options: ['large-prompt', 'medium-prompt', 'small-prompt'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <InputSearch {...args} />

export const LargePrompt = Template.bind({})
LargePrompt.args = {
  size: 'large-prompt',
  placeholder: 'Buscar tu actividad',
}

export const MediumPrompt = Template.bind({})
MediumPrompt.args = {
  size: 'medium-prompt',
  placeholder: 'Buscar tu actividad',
}

export const SmallPrompt = Template.bind({})
SmallPrompt.args = {
  size: 'small-prompt',
  placeholder: 'Buscar tu actividad',
}
