import type { Meta, StoryObj } from '@storybook/react'
import { NavigationLink } from './navigation-link'


const meta = {
  title: 'NavigationLink (Sidenav)',
  component: NavigationLink,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NavigationLink>
export default meta
type Story = StoryObj<typeof meta>


export const Example: Story = {
  args: {
    text: 'Home',
    iconName: 'home-outline'
  },
}