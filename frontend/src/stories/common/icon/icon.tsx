import classNames from 'classnames'
import { ICON_PATH_MAP } from '../../../constants/icon-path-map'
import './style.scss'


export const Icon = ({ name, classList }: NavigationLinkProps) => {
    return (
        <span className={classNames('common--icon__container', classList)}>
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


interface NavigationLinkProps {
    /**
     * Icon name
     */
    name: string


    /**
     * CSS classes
     */
    classList?: string | { [key: string]: any }

    /**
     * Optional click handler
     */
    onClick?: () => void
}
