import { ComponentStory, ComponentMeta } from '@storybook/react'

import App from './App'

export default {
  title: 'Components/App',
  component: App,
} as ComponentMeta<typeof App>

const Template = (args: any) => <App {...args} />

export const Default = Template.bind({})
