import { Link } from "react-router-dom"
import { Avatar } from "../../../../../stories/common/avatar/avatar"
import './style.scss'


export function SuggestionPreview({ imageUrl, userName, suggestReason, isHighlight }: Props) {
    return (
        <article className="feed--suggestion-preview__container">
            <Avatar size="tiny" imageUrl={imageUrl} shouldHighlight={isHighlight} />

            <div className="name-container">
                <Link to="#">{userName}</Link>
                <span>{suggestReason}</span>
            </div>

            <button>Follow</button>
        </article>
    )
}


type Props = {
    imageUrl: string
    userName: string
    suggestReason: string
    isHighlight: boolean
}