import { Link } from "react-router-dom"
import uuid from "react-uuid"
import { SuggestionPreview } from "../suggestion-preview/suggestion-preview"
import './style.scss'


const users = [
    {
        imageUrl: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
        userName: 'Irina Bartilova',
        suggestReason: 'Follows you',
        isHighlight: true
    },
    {
        imageUrl: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
        userName: 'Maor Aknin',
        suggestReason: 'Follows you',
        isHighlight: true
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
        userName: 'Kushal Al Takhur Nimi',
        suggestReason: 'Follows you',
        isHighlight: false
    },
    {
        imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2022-23/Kante_profile_avatar_final_22-23.png',
        userName: 'John Will Stocks',
        suggestReason: 'Follows you',
        isHighlight: false
    },
    {
        imageUrl: 'https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg',
        userName: 'Maharabata Joh',
        suggestReason: 'Follows you',
        isHighlight: true
    }
]

export function SuggestionsList() {
    return (
        <div className="feed--suggestion-list__container">
            <div className="title">
                <span>Suggested for you</span>
                <Link to="#">See All</Link>
            </div>

            <div className="suggestions">
                {users.map(user => <SuggestionPreview
                    key={uuid()}
                    imageUrl={user.imageUrl}
                    userName={user.userName}
                    suggestReason={user.suggestReason}
                    isHighlight={user.isHighlight}
                />
                )}
            </div>
        </div>
    )
}