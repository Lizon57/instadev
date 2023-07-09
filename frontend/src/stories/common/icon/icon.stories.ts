import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'
import { ICON_PATH_MAP } from '../../../constants/icon-path-map'


const meta = {
  title: 'Icon (Common)',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: Object.keys(ICON_PATH_MAP),
      control: { type: 'select' }
    }
  },
} satisfies Meta<typeof Icon>
export default meta
type Story = StoryObj<typeof meta>


export const Simple: Story = {
  args: {
    name: 'home-outline',
  },
}

export const WithTitle: Story = {
  args: {
    name: 'home-outline',
    title: 'home'
  },
}

export const WithOnClick: Story = {
  args: {
    name: 'home-outline',
    onClick: () => console.log('home')
  },
}