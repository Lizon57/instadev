import { MomentList } from './moment-list/moment-list'
import './style.scss'


export function MainContent() {
    return (
        <main className="feed--main-content__container">
            <MomentList />
        </main>
    )
}