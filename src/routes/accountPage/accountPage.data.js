import cardImg1 from '../../assets/icon/account_1.png'
import cardImg2 from '../../assets/icon/account_2.png'
import cardImg3 from '../../assets/icon/account_3.png'
import cardImg4 from '../../assets/icon/account_4.png'
import cardImg5 from '../../assets/icon/account_5.png'
import logoutIcon from '../../assets/icon/logout.png'

export const titleArr = [
    {
    title: 'Orders',
    link: '/orders'
    },
    {
    title: 'Profile',
    link: '/profile'
    },
    {
    title: 'Address',
    link: '/address'
    },
    {
    title: 'Payment',
    link: '/payment'
    },
    {
    title: 'Favorite',
    link: '/favorite'
    },
]

export const cardArr = [
    {
        title: 'Orders',
        text: 'Review your purchases made online or in-stores',
        imageUrl: cardImg1,
        link: '/orders'
    },
    {
        title: 'Profile',
        text: 'Manage your password and communication preferences',
        imageUrl: cardImg2,
        link: '/profile'
    },
    {
        title: 'Address',
        text: 'Manage your shipping addresses',
        imageUrl: cardImg3,
        link: '/address'
    },
    {
        title: 'Payment settings',
        text: 'Manage your preferred methods of payment',
        imageUrl: cardImg4,
        link: '/payment'
    },
    {
        title: 'Favorite',
        text: 'All your favorite items in one place',
        imageUrl: cardImg5,
        link: '/favorite'
    },
    {
        title: 'Logout',
        text: 'Logout your account',
        imageUrl: logoutIcon,
    },
]
