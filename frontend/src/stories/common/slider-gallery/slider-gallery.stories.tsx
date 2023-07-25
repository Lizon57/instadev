import type { Meta, StoryObj } from '@storybook/react'
import uuid from 'react-uuid'
import { SliderGallery } from './slider-gallery'


const meta = {
    title: 'Slider Gallery (Common)',
    component: SliderGallery,
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof SliderGallery>
export default meta
type Story = StoryObj<typeof meta>


const elements = [
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
    'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg'
]
const getSliderImages = () => elements.map(img => <img src={img} key={uuid()} />)

export const Simple: Story = {
    args: {
        children: getSliderImages().slice(0, 1)
    },
}

export const TwoSlides: Story = {
    args: {
        children: getSliderImages().slice(0, 2)
    },
}

export const FourSlides: Story = {
    args: {
        children: getSliderImages().slice(0, 4)
    },
}

export const EightSlides: Story = {
    args: {
        children: getSliderImages().slice(0, 8)
    },
}

export const TenSlides: Story = {
    args: {
        children: getSliderImages().slice(0, 10)
    },
}