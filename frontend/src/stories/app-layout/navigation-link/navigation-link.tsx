import { NavLink } from 'react-router-dom'
import classNames from "classnames"
import { Icon } from '../../common/icon/icon'
import './style.scss'


export const NavigationLink = ({ text, icon, imageUrl, isActive, ...props }: NavigationLinkProps) => {
  return (
    <li className={classNames('layout--navigation-item__container', { 'with-image': imageUrl })}>
      <NavLink to="#" {...props}>
        {icon && <Icon name={isActive ? icon.active : icon.inactive} />}
        {imageUrl && <img src={imageUrl} />}
        {text}
      </NavLink>
    </li>
  )
}


interface NavigationLinkProps {
  /**
   * Link text
   */
  text: string

  /**
  * Icon name when active and inactive (using icon story)
  */
  icon?: {
    active: string,
    inactive: string
  }

  /**
   * Image (instead of icon)
   */
  imageUrl?: string

  /**
   * Is linking to current page / on active mode?
   */
  isActive?: Boolean
}
