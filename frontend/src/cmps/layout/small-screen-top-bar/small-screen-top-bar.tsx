import { Icon } from '../../../stories/common/icon/icon'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'
import './_style.scss'
import { RenderByDeviceWidth } from '../render-by-device-width/render-by-device-width'


export function SmallScreenTopBar() {
    return (
        <header className="layout--small-screen-top-bar__container">
            <div className="logo">
                <Logo />
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