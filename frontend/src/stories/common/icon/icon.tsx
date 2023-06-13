import { ICON_PATH_MAP } from '../../../constants/icon-path-map'
import './style.scss'


export const Icon = ({ name }: NavigationLinkProps) => {
    return (
        <span className="common--icon__container">
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
     * Optional click handler
     */
    onClick?: () => void
}
