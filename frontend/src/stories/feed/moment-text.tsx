import { useState, useRef, useEffect } from "react"
import classNames from 'classnames'
import './style.scss'


export const MomentText = ({ text, nickname }: MomentText) => {
    const [isShowMoreText, setIsShowMoreText] = useState(false)
    const [shouldRenderMoreTextButton, setShouldRenderMoreTextButton] = useState(false)

    const textContainerRef = useRef<HTMLDivElement>(null)

    const onShowMoreText = () => setIsShowMoreText(true)

    const getShouldShowMoreTextButton = () => {
        if (!textContainerRef?.current) return false
        return textContainerRef.current.scrollHeight > 20
    }

    useEffect(() => {
        const shouldRenderShowMoreTextButton = getShouldShowMoreTextButton()
        setShouldRenderMoreTextButton(shouldRenderShowMoreTextButton)
    }, [textContainerRef.current])

    return (
        <div className="feed--moment-text__container">
            <div className={classNames('text-container', { 'full-height': isShowMoreText })} ref={textContainerRef}>
                <span className="nickname">{nickname}</span>
                <span className="text">{text}</span>
            </div>

            {(!isShowMoreText && shouldRenderMoreTextButton) &&
                <>
                    <div>...</div>
                    <button onClick={onShowMoreText}>more</button>
                </>
            }
        </div>
    )
}


interface MomentText {
    /**
     * Moment text provided by user
     */
    text: string

    /**
     * Moment creator's nickname
     */
    nickname: string
}
