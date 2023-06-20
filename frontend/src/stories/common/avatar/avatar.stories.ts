import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'
import profileImage from '../../../assets/images/profile-image.jpg'


const meta = {
  title: 'Avatar (Common)',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large']
      }
    },
    shouldHighlight: { control: 'boolean' }
  },
  args: {
    size: 'medium'
  }
} satisfies Meta<typeof Avatar>
export default meta
type Story = StoryObj<typeof meta>


export const Simple: Story = {
  args: {
    imageUrl: profileImage,
  },
}

export const Highlighted: Story = {
  args: {
    imageUrl: profileImage,
    shouldHighlight: true,
  },
}