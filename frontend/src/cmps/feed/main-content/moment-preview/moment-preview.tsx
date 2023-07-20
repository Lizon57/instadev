import { useState } from "react"

import { makeId } from "../../../../services/util/make-id"
import { getTimePassedFormated } from "../../../../services/util/get-time-passed-formated"

import { Moment } from "../../../../models/moment/moment"

import { Avatar } from "../../../../stories/common/avatar/avatar"
import { Icon } from "../../../../stories/common/icon/icon"

import './style.scss'
import classNames from "classnames"


const MOMENT: Moment = {
    _id: makeId(),

    miniCreator: {
        id: makeId(),
        nickname: 'Apolo String',
        displayName: 'Kushal Al Takhur Nimi',
        imageUrl: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
        isVerified: true,
        isHasStory: false
    },

    cratedAt: Date.now() - 50000000,

    media: {
        location: 'Apolo center of USA',
        text: 'This is my new APOLO STRING',
        images: [
            {
                imageUrl: 'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
                tagged: []
            }
        ]
    }
    ,

    like: {
        likeCount: 4,
        likedByUsersIds: []
    },

    comments: [],

    flags: {
        isSaved: false,
        isLiked: false,
    }

}


export function MomentPreview() {
    const [isLiked, setIsLiked] = useState(MOMENT.flags.isLiked)
    const [isLikedIconHover, setIsLikedIconHover] = useState(false)
    const [isLikedAnimationStarted, setIsLikedAnimationStarted] = useState(false)
    const [isSaved, setIsSaved] = useState(MOMENT.flags.isSaved)

    const toggleIsLiked = () => setIsLiked(!isLiked)
    const toggleIsSaved = () => setIsSaved(!isSaved)

    const handleMouseEnterLikedIcon = () => setIsLikedIconHover(true)
    const handleMouseLeaveLikedIcon = () => {
        setIsLikedIconHover(false)
        setIsLikedAnimationStarted(true)
    }


    return (
        <article className="feed--moment-preview__container">
            <div className="details-container">
                <Avatar imageUrl={MOMENT.miniCreator.imageUrl} size="small" shouldHighlight={MOMENT.miniCreator.isHasStory} />
                <div className="details">
                    <div className="user-and-time-container">
                        <span className="creator-name">{MOMENT.miniCreator.displayName}</span>
                        {MOMENT.miniCreator.isVerified && <span className="verified-user-indicator">
                            <Icon name="verified-user-fill" />
                        </span>
                        }
                        <span className="published-time">
                            <time dateTime={MOMENT.cratedAt.toString()}>{getTimePassedFormated(MOMENT.cratedAt)}</time>
                        </span>
                    </div>
                    <span className="location">{MOMENT.media.location}</span>
                </div>
            </div>

            <div className="media-container">
                <img src={MOMENT.media.images?.[0].imageUrl} />
            </div>

            <div className="actions-container">
                <div className="start-panel">
                    <Icon
                        classList={classNames('liked-indicator',
                            {
                                'liked': isLiked,
                                'hover-able': !isLiked,
                                'hover-out': !isLikedIconHover && isLikedAnimationStarted
                            }
                        )}
                        name={isLiked ? 'heart-fill' : 'heart-outline'}
                        title={isLiked ? 'Unlike' : 'Like'}
                        onClick={toggleIsLiked}
                        onMouseEnter={handleMouseEnterLikedIcon}
                        onMouseLeave={handleMouseLeaveLikedIcon}
                    />
                    <Icon name="chat-outline" title="Comment" classList="hover-able" />
                    <Icon name="messages-outline" title="Share Post" classList="hover-able" />
                </div>

                <div className="end-panel">
                    <Icon
                        classList={classNames('saved-indicator', { 'hover-able': !isSaved })}
                        name={isSaved ? 'bookmark-fill' : 'bookmark-outline'}
                        title={isSaved ? 'Remove' : 'Save'}
                        onClick={toggleIsSaved}
                    />
                </div>
            </div>

            <div className="reactions-container">
                {!!MOMENT.like.likeCount && <div className="like-counter">{MOMENT.like.likeCount} likes</div>}
            </div>
        </article>
    )
}