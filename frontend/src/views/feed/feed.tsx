import { AsideContent } from '../../cmps/feed/aside-content/aside-content'
import './_style.scss'


export function Feed() {
    return (
        <div className="views--feed__container">
            <div className="centerize">
                <main>
                    Feed
                </main>

                <AsideContent />
            </div>
        </div>
    )
}