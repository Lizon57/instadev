import { MiniUser } from "../user/mini-user"


export interface Comment {
    byUser: MiniUser
    createdAt: number
    text: string
    likedByUserIds: string[]
    subcomments?: Comment[]
}