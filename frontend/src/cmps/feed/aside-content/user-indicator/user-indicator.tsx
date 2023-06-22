import { Link } from "react-router-dom"
import { Avatar } from "../../../../stories/common/avatar/avatar"
import profileImg from '../../../../assets/images/profile-image.jpg'
import './style.scss'


export function UserIndicator() {
    return (
        <div className="feed--user-indicator__container">
            <Avatar imageUrl={profileImg} size="medium" />
            <div className="name-container">
                <Link to="#">maccabipedia</Link>
                <span>מכביפדיה</span>
            </div>
            <button>Switch</button>
        </div>
    )
}