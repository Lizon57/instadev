import { StoryList } from './story-list/story-list'
import './style.scss'


export function MainContent() {
    return (
        <main className="feed--main-content__container">
            <StoryList />
        </main>
    )
}