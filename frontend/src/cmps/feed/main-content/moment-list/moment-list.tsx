import { MomentPreview } from "../moment-preview/moment-preview"
import './style.scss'

export function MomentList() {
    return (
        <section className="feed--moment-list__container">
            <MomentPreview />
            <MomentPreview />
            <MomentPreview />
        </section>
    )
}