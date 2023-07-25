import { useState, ReactNode, Children } from 'react'
import Slider from "react-slick"
import './style.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import classNames from 'classnames'


export const SliderGallery = ({ children }: SliderGalleryProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    let dotsClassname = null
    switch (Children.count(children)) {
        case 2:
        case 3:
            dotsClassname = 'tiny'
            break
        case 4:
        case 5:
            dotsClassname = 'small'
            break
        case 6:
        case 7:
            dotsClassname = 'medium'
            break
        case 8:
        case 9:
            dotsClassname = 'large'
            break
        case 10:
            dotsClassname = 'huge'
            break
    }

    const sliderSetting = {
        speed: 250,
        dots: true,
        infinite: false,
        afterChange: (current: number) => setCurrentSlide(current)
    }

    const getArrowHelpers = () => {
        const classNames: string[] = []
        if ((currentSlide + 1) >= Children.count(children)) classNames.push('hide-next-arrow')
        if (currentSlide <= 0) classNames.push('hide-prev-arrow')
        return classNames
    }

    return (
        <div className={classNames('common--slider-gallery__container', getArrowHelpers())}>
            <Slider {...sliderSetting}>
                {children}
            </Slider>
            <div className={classNames('buffer', dotsClassname)}></div>
        </div>
    )
}


interface SliderGalleryProps {
    /**
     * Slider gallery render elements
     */
    children: ReactNode
}
