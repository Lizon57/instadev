import { Link } from "react-router-dom"
import uuid from 'react-uuid'
import { NavigationLink } from "../../stories/app-layout/navigation-link/navigation-link"
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import profileImage from '../../assets/images/profile-image.jpg'
import './style.scss'


const navigationLinks = [
    {
        text: 'Home',
        icon: {
            inactive: 'home-outline',
            active: 'home-fill'
        }
    },
    {
        text: 'Search',
        icon: {
            inactive: 'search-outline',
            active: 'search-fill'
        }
    },
    {
        text: 'Explore',
        icon: {
            inactive: 'compass-outline',
            active: 'compass-fill'
        },
    },
    {
        text: 'Messages',
        icon: {
            inactive: 'messages-outline',
            active: 'messages-fill'
        }
    },
    {
        text: 'Notifications',
        icon: {
            inactive: 'heart-outline',
            active: 'heart-fill'
        },
    },
    {
        text: 'Create',
        icon: {
            inactive: 'square-plus-outline',
            active: 'square-plus-fill'
        },
    },
    {
        text: 'Profile',
        imageUrl: profileImage
    }
]


export function SidebarNavigation() {
    return (
        <nav className="layout--sidebar-navigation__container">
            <Link to="/" className="logo-container">
                <Logo />
            </Link>

            <div className="main-links">
                {navigationLinks.map(link => <NavigationLink
                    key={uuid()}
                    text={link.text}
                    icon={link?.icon}
                    imageUrl={link?.imageUrl}
                />)}
            </div>

            <div className="more-links-dropdown-container">
                <NavigationLink text="More" icon={{ inactive: 'bars-thin', active: 'bars-thick' }} />
            </div>
        </nav>
    )
}