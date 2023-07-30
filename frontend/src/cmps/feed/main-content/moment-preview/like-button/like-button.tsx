import { useState } from "react"
import classNames from "classnames"

import { Icon } from "../../../../../stories/common/icon/icon"
import './style.scss'


export function LikeButton({ isLikedMoment }: Props) {
    const [isLiked, setIsLiked] = useState(isLikedMoment)
    const [isLikedIconHover, setIsLikedIconHover] = useState(false)
    const [isLikedAnimationStarted, setIsLikedAnimationStarted] = useState(false)

    const toggleIsLiked = () => setIsLiked(!isLiked)
    const handleMouseEnterLikedIcon = () => setIsLikedIconHover(true)
    const handleMouseLeaveLikedIcon = () => {
        setIsLikedIconHover(false)
        setIsLikedAnimationStarted(true)
    }


    return (
        <Icon
            classList={classNames('liked-indicator',
                {
                    'liked': isLiked,
                    'hover-able': !isLiked,
                    'hover-out': !isLikedIconHover && isLikedAnimationStarted
                }
            )}
            name={isLiked ? 'heart-fill' : 'heart-outline'}
            title={isLiked ? 'Unlike' : 'Like'}
            onClick={toggleIsLiked}
            onMouseEnter={handleMouseEnterLikedIcon}
            onMouseLeave={handleMouseLeaveLikedIcon}
        />
    )
}


type Props = {
    isLikedMoment: boolean
}