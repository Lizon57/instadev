import { ShareList } from './share-list/share-list'
import './style.scss'


export function MainContent() {
    return (
        <main className="feed--main-content__container">
            <ShareList />
        </main>
    )
}