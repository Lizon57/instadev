import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import uuid from 'react-uuid'

import { useWindowSize } from "../../../hooks/use-window-size"

import './style.scss'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'

import { APP_NAVIGATION_LINKS } from "../../../constants/app-navigation-links"

import { RenderByDeviceWidth } from "../render-by-device-width/render-by-device-width"
import { NavigationLink } from "../../../stories/app-layout/navigation-link/navigation-link"
import { Icon } from "../../../stories/common/icon/icon"
import { SCREEN_WIDTH_MAP } from "../../../constants/screen-width-map"


const wideMobileNavigationLinks = structuredClone(APP_NAVIGATION_LINKS).filter(link => link.text !== 'Search' && link.text !== 'Notifications')
const narrowMobileNavigationLinks = structuredClone(APP_NAVIGATION_LINKS).filter(link => link.text !== 'Explore' && link.text !== 'Messages' && link.text !== 'Notifications')



export function NavigationBar() {
    const [navigationLinks, setNavigationLinks] = useState(APP_NAVIGATION_LINKS)

    const { width: deviceWidth } = useWindowSize()

    useEffect(() => {
        if (deviceWidth < SCREEN_WIDTH_MAP.tiny) {
            setNavigationLinks(narrowMobileNavigationLinks)
        } else if ((deviceWidth < SCREEN_WIDTH_MAP.small) && (wideMobileNavigationLinks.length !== navigationLinks.length)) {
            setNavigationLinks(wideMobileNavigationLinks)
        } else if ((deviceWidth >= SCREEN_WIDTH_MAP.small) && (APP_NAVIGATION_LINKS.length !== navigationLinks.length)) {
            setNavigationLinks(APP_NAVIGATION_LINKS)
        }
    }, [deviceWidth])



    return (
        <nav className="layout--navigation-bar__container">
            <Link to="/" className="logo-container">
                <RenderByDeviceWidth maxDeviceWide="large">
                    <Icon name="instagram-outline" classList="brand-logo" />
                </RenderByDeviceWidth>
                <RenderByDeviceWidth minDeviceWide="large" isInclusive>
                    <Logo />
                </RenderByDeviceWidth>
            </Link>

            <div className="main-links">
                {navigationLinks.map(link => <NavigationLink
                    key={uuid()}
                    text={link.text}
                    icon={link?.icon}
                    imageUrl={link?.imageUrl}
                    isActive={link?.isActive}
                />)}
            </div>

            <div className="more-links-dropdown-container">
                <NavigationLink text="More" icon={{ inactive: 'bars-thin', active: 'bars-thick' }} isActive={false} />
            </div>
        </nav>
    )
}