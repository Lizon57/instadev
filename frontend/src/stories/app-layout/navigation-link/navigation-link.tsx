import { Link } from 'react-router-dom'
import classNames from "classnames"
import { Icon } from '../../common/icon/icon'
import './style.scss'
import { RenderByDeviceWidth } from '../../../cmps/layout/render-by-device-width/render-by-device-width'


export const NavigationLink = ({ text, icon, imageUrl, isActive, ...props }: NavigationLinkProps) => {
  return (
    <li className={classNames('layout--navigation-item__container', { 'with-image': imageUrl })}>
      <Link to="#" className={classNames({ active: isActive })} {...props}>
        {icon && <Icon name={isActive ? icon.active : icon.inactive} classList={{ 'with-dot': icon?.shouldAppendDot }} />}
        {imageUrl && <img src={imageUrl} />}
        <span className="text">{text}</span>
      </Link>
      <RenderByDeviceWidth maxDeviceWide="large">
        <span className="tooltip">{text}</span>
      </RenderByDeviceWidth>
    </li>
  )
}


interface NavigationLinkProps {
  /**
   * Link text
   */
  text: string

  /**
  * Icon name when active and inactive (using icon story), appending dot flag
  */
  icon?: {
    active: string
    inactive: string
    shouldAppendDot?: Boolean
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
