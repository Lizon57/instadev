import { Link } from 'react-router-dom'
import { Icon } from '../../common/icon/icon'
import './style.scss'


export const NavigationLink = ({ text, iconName, ...props }: NavigationLinkProps) => {
  return (
    <li className="layout--navigation-item__container">
      <Link to="#" {...props}>
        {iconName && <Icon name={iconName} />}
        {text}
      </Link>
    </li>
  )
}


interface NavigationLinkProps {
  /**
   * Link text
   */
  text: string

  /**
  * Icon name (using icon story)
  */
  iconName?: string

  /**
   * Optional click handler
   */
  onClick?: () => void
}
