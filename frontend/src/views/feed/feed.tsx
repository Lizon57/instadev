import { AsideContent } from '../../cmps/feed/aside-content/aside-content'
import { MainContent } from '../../cmps/feed/main-content/main-content'
import './_style.scss'


export function Feed() {
    return (
        <div className="views--feed__container">
            <div className="centerize">
                <MainContent />

                <AsideContent />
            </div>
        </div>
    )
}