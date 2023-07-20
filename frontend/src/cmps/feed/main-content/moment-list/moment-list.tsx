import { MomentPreview } from "../moment-preview/moment-preview"
import './style.scss'

export function MomentList() {
    return (
        <main className="feed--moment-list__container">
            <MomentPreview />
            <MomentPreview />
            <MomentPreview />
        </main>
    )
}