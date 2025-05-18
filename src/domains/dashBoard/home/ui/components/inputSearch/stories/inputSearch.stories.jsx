import InputSearch from '../index'
// styles
@use '../../../../sass/variables.scss';

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

export const largePrompt = Template.bind({})
largePrompt.args = {
  size: 'large-prompt',

  placeholder: 'Buscar tu actividad',
}

export const mediumPrompt = Template.bind({})
mediumPrompt.args = {
  size: 'medium-prompt',
  placeholder: 'Buscar tu actividad',
}

export const smallPrompt = Template.bind({})
smallPrompt.args = {
  size: 'small-prompt',
  placeholder: 'Buscar tu actividad',
}
