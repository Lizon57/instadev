import { SharePreview } from "../share-preview/share-preview"
import './style.scss'

export function ShareList() {
    return (
        <main className="feed--share-list__container">
            <SharePreview />
            <SharePreview />
            <SharePreview />
        </main>
    )
}