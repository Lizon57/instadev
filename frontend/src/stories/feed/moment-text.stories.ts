import type { Meta, StoryObj } from '@storybook/react'
import { MomentText } from './moment-text'


const meta = {
    title: 'Moment text (Feed)',
    component: MomentText,
    tags: ['autodocs'],
} satisfies Meta<typeof MomentText>
export default meta
type Story = StoryObj<typeof meta>


export const Simple: Story = {
    args: {
        nickname: 'maccabitlvfc',
        text: 'Just a really long text talking about the Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nesciunt culpa quas dolorum nobis corporis, facere perspiciatis qui maiores ducimus.'
    },
}

export const ShortText: Story = {
    args: {
        nickname: 'maccabitlvfc',
        text: 'Just a short text'
    },
}
