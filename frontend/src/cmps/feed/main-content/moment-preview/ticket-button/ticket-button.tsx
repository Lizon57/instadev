import { useState } from "react"
import classNames from "classnames"
import { Icon } from "../../../../../stories/common/icon/icon"
import './style.scss'


export function TicketButton({ isTicketMoment }: Props) {
    const [isTicket, setIsTicket] = useState(isTicketMoment)
    const toggleIsTicket = () => setIsTicket(!isTicket)

    return (
        <div className="feed--ticket-indicator__container">
            <Icon
                classList={classNames('ticket-icon', { 'hover-able': !isTicket })}
                name={isTicket ? 'bookmark-fill' : 'bookmark-outline'}
                title={isTicket ? 'Remove' : 'Save'}
                onClick={toggleIsTicket}
            />
        </div>
    )
}


type Props = {
    isTicketMoment: boolean
}