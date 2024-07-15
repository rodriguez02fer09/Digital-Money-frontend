import InputSearch from '../index'
import '../../conts/variables.scss'

export default {
  component: InputSearch,
  title: 'InputSearch',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['large-prompt', 'medium-prompt', 'small-prompt'],
      },
    },
  },
}

const Template = args => <InputSearch {...args} />

export const largePrompt = Template.bind({})
largePrompt.args = {
  type: 'large-prompt',
  value: '',
  placeholder: 'Buscar tu actividad',
}

export const mediumPrompt = Template.bind({})
mediumPrompt.args = {
  type: 'medium-prompt',
  value: '',
  placeholder: 'Buscar tu actividad',
}

export const smallPrompt = Template.bind({})
smallPrompt.args = {
  type: 'small-prompt',
  value: '',
  placeholder: 'Buscar tu actividad',
}
