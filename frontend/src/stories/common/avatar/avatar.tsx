import classNames from 'classnames'
import './style.scss'


export const Avatar = ({ imageUrl, size, shouldHighlight, classList }: NavigationLinkProps) => {
    return (
        <span className={classNames('common--avatar__container', size, classList, { 'highlight': shouldHighlight })}>
            <span className="image-container">
                <img src={imageUrl} />
            </span>

        </span>
    )
}


interface NavigationLinkProps {
    /**
     * Image url
     */
    imageUrl: string

    /**
     * Avatar size
     */
    size: 'tiny' | 'small' | 'medium' | 'large'

    /**
     * Should highlight with circle
     */
    shouldHighlight?: boolean

    /**
     * CSS classes
     */
    classList?: string | { [key: string]: any }
}
