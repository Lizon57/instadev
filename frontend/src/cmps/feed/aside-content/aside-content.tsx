import { RenderByDeviceWidth } from "../../layout/render-by-device-width/render-by-device-width"
import { SuggestionsList } from "./suggestions/suggestion-list/suggestion-list"
import { UserIndicator } from "./user-indicator/user-indicator"
import './_style.scss'


export function AsideContent() {
    return (
        <RenderByDeviceWidth minDeviceWide="medium" isInclusive>
            <aside className="feed--aside-content__container">
                <UserIndicator />

                <SuggestionsList />
            </aside>
        </RenderByDeviceWidth>
    )
}