import uuid from "react-uuid"

import { makeId } from "../../../../services/util/make-id"
import { getTimePassedFormated } from "../../../../services/util/get-time-passed-formated"

import { Moment } from "../../../../models/moment/moment"

import { Avatar } from "../../../../stories/common/avatar/avatar"
import { Icon } from "../../../../stories/common/icon/icon"

import { SliderGallery } from "../../../../stories/common/slider-gallery/slider-gallery"
import { MomentText } from "../../../../stories/feed/moment-text"
import { LikeButton } from "./like-button/like-button"
import { TicketButton } from "./ticket-button/ticket-button"
import './style.scss'


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
        text: 'This is my new APOLO STRINGT his is my new APOLO STRING This is my new APOLO STRINGThis is my new APOLO STRING This is my new APOLO STRING',
        images: [
            {
                imageUrl: 'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
                tagged: []
            },
            {
                imageUrl: 'https://www.sportpalace.co.il/wp-content/uploads/2015/07/1600X800_8325-1024x512.jpg',
                tagged: []
            }
        ]
    },

    like: {
        likeCount: 4,
        likedByUsersIds: []
    },

    comments: [],

    flags: {
        isTicket: false,
        isLiked: false,
    }

}


export function MomentPreview() {

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

            <SliderGallery>
                {MOMENT.media.images?.map(image => <img src={image.imageUrl} key={uuid()} />)}
            </SliderGallery>

            <div className="actions-container">
                <div className="start-panel">
                    <LikeButton isLikedMoment={MOMENT.flags.isLiked} />
                    <Icon name="chat-outline" title="Comment" classList="hover-able" />
                    <Icon name="messages-outline" title="Share Post" classList="hover-able" />
                </div>

                <TicketButton isTicketMoment={MOMENT.flags.isTicket} />
            </div>

            <div className="reactions-container">
                {!!MOMENT.like.likeCount && <div className="like-counter">{MOMENT.like.likeCount} likes</div>}
            </div>

            <MomentText text={MOMENT.media.text} nickname={MOMENT.miniCreator.nickname} />
        </article>
    )
}