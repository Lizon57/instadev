import profileImage from '../assets/images/profile-image.jpg'


export const APP_NAVIGATION_LINKS = [
    {
        text: 'Home',
        icon: {
            inactive: 'home-outline',
            active: 'home-fill'
        },
        isActive: true
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
            active: 'heart-fill',
            shouldAppendDot: true
        }
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
