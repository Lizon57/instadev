import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import classNames from "classnames"
import { useWindowScrollY } from '../../../hooks/use-window-scroll-y'

import { Icon } from '../../../stories/common/icon/icon'
import { RenderByDeviceWidth } from '../render-by-device-width/render-by-device-width'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'

import './_style.scss'


export function SmallScreenTopBar() {
    const [prevScrollOffset, setPrevScrollOffset] = useState(window.scrollY)
    const [shouldRenderBar, setShouldRenderBar] = useState(false)
    const scrollY = useWindowScrollY()

    useEffect(() => {
        setPrevScrollOffset(scrollY)

        if ((prevScrollOffset > scrollY) && scrollY > 60) setShouldRenderBar(true)
        else setShouldRenderBar(false)
    }, [scrollY])


    return (
        <header className={classNames('layout--small-screen-top-bar__container', { 'top-render': shouldRenderBar })}>
            <div className="logo">
                <Link to="./">
                    <Logo />
                </Link>
            </div>

            <div className="options">
                <RenderByDeviceWidth maxDeviceWide="tiny">
                    <Icon name="messages-outline" title="Messages" classList="messages" />
                </RenderByDeviceWidth>

                <RenderByDeviceWidth minDeviceWide="tiny" isInclusive>
                    <div className="search-container">
                        <input type="text" placeholder="Search" />
                        <Icon name="search-outline" />
                    </div>
                </RenderByDeviceWidth>

                <Icon name="heart-outline" title="Notifications" />
            </div>
        </header>
    )
}