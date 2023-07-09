import { Comment } from "../comment/comment"
import { MiniUser } from "../user/mini-user"


export interface Share {
    _id?: string

    miniCreator: MiniUser

    cratedAt: number

    media: {
        text: string
        location: string
        images?: {
            imageUrl: string
            tagged: {
                user: MiniUser,
                position: {
                    x: number
                    y: number
                }
            }[]
        }[]
        videos?: {
            videoUrl: string
            tagged: MiniUser[]
        }[]
    }

    like: {
        likeCount: number
        likedByUsersIds: string[]
    }

    comments: Comment[]

    flags: {
        isSaved: boolean
        isLiked: boolean
    }
}