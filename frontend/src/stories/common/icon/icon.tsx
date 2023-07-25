import classNames from 'classnames'
import { ICON_PATH_MAP } from '../../../constants/icon-path-map'
import './style.scss'


export const Icon = ({ name, title, classList, onClick, onMouseEnter, onMouseLeave }: IconProps) => {
    const props = { title, onClick, onMouseEnter, onMouseLeave }

    return (
        <span className={classNames('common--icon__container', classList)} {...props}>
            <svg
                color="currentColor"
                fill="currentColor"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                role="img"
            >
                {ICON_PATH_MAP[name]}
            </svg>
        </span>
    )
}


interface IconProps {
    /**
     * Icon name
     */
    name: string


    /**
     * Element title (A11Y)
     */
    title?: string


    /**
     * CSS classes
     */
    classList?: string | { [key: string]: any }

    /**
     * Optional click handler
     */
    onClick?: () => void

    /**
     * Optional mouse enter handler
    */
    onMouseEnter?: () => void

    /**
      * Optional mouse leave handler
      */
    onMouseLeave?: () => void
}
