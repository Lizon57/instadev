import uuid from 'react-uuid'
import { NavigationLink } from "../../stories/app-layout/navigation-link/navigation-link"
import './style.scss'

const navigationLinks = [
    {
        text: 'Home',
        iconName: 'home-outline'
    },
    {
        text: 'Search',
        iconName: 'search-outline'
    },
    {
        text: 'Explore',
        iconName: 'compass-outline'
    },
    {
        text: 'Messages',
        iconName: 'messages-outline'
    },
    {
        text: 'Notifications',
        iconName: 'heart-outline'
    },
    {
        text: 'Create',
        iconName: 'square-plus-outline'
    },
]


export function SidebarNavigation() {
    return (
        <nav className="layout--sidebar-navigation__container">
            {navigationLinks.map(link => <NavigationLink key={uuid()} text={link.text} iconName={link.iconName} />)}
        </nav>
    )
}