import { SectionType } from '../../component/sectionHome/sectionHome.component'
import arrow from '../../assets/icon/arrow-down.png'

import header from '../../assets/home/home_header.jpg'
import homeImg2 from '../../assets/home/home_02.jpg'
import homeImg3 from '../../assets/home/home_03.jpg'
import homeImg4 from '../../assets/home/home_04.jpg'

export const arrowDown = arrow;
export const headerImg = header;

export const sectionArray = [
    {
        id: 2,
        heading: 'About',
        link: 'about',
        imageUrl: homeImg2,
        type: SectionType.left,
        text: 'Casual brand focused on modern reinterpretations of urban styles to present collections in which a single item contributes to a stylish look.',
    },
    {
        id: 3,
        heading: 'Shop',
        link: 'product',
        imageUrl: homeImg3,
        type: SectionType.right, 
        text: '2023 Collection Lookbook ANC',
    },
    {
        id: 4,
        heading: 'Corduroy',
        link: false,
        imageUrl: homeImg4,
        type: SectionType.full,
        text: 'For the 23 ss season',
    },
    {
        id: 5,
        heading: 'Instagram',
        link: 'https://www.instagram.com/',
        imageUrl: false,
        type: SectionType.noImg,
        text: 'Casual brand focused on modern reinterpretations of urban styles to present collections in which a single item contributes to a stylish look.',
    },
] 

export const totalPage = (sectionArray.length) + 2;