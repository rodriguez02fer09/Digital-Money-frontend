import Inputs from '../index'
import '../styles/desktop.scss'
import '../../../sass/_variables.scss'

export default {
  component: Inputs,
  title: 'Inputs',
  argTypes: {
    inputs: [],
  },
}

const Template = args => <Inputs {...args} />

export const Default = Template.bind({})
Default.args = {}
