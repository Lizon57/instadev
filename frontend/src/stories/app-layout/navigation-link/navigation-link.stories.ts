import type { Meta, StoryObj } from '@storybook/react'
import { NavigationLink } from './navigation-link'
import profileImage from '../../../assets/images/profile-image.jpg'


const meta = {
  title: 'NavigationLink (Sidenav)',
  component: NavigationLink,
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean' },
    text: { control: 'text' },
  },
  args: {
    isActive: false,
  }
} satisfies Meta<typeof NavigationLink>
export default meta
type Story = StoryObj<typeof meta>


export const Simple: Story = {
  args: {
    text: 'Home',
    icon: {
      active: 'home-fill',
      inactive: 'home-outline',
      shouldAppendDot: false
    }
  },
}

export const WithImage: Story = {
  args: {
    text: 'Profile',
    imageUrl: profileImage
  },
}

export const WithDot: Story = {
  args: {
    text: 'Notifications',
    icon: {
      inactive: 'heart-outline',
      active: 'heart-fill',
      shouldAppendDot: true
    }
  },
}