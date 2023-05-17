import { SectionType } from '../../component/sectionHome/sectionHome.component'

// TESTING TODO NEED TO PUT THE RIGHT IMAGE
import page2Img from '../../assets/home/aboutus_img_02.png'
import page3Img from '../../assets/home/aboutus_img_01.png'
import page4Img from '../../assets/home/main_bg_header.png'

export const sectionArray = [
    {
        id: 2,
        heading: 'About',
        link: 'about',
        imageUrl: page2Img,
        type: SectionType.left,
        text: 'Casual brand focused on modern reinterpretations of urban styles to present collections in which a single item contributes to a stylish look.',
    },
    {
        id: 3,
        heading: 'Shop',
        link: 'product',
        imageUrl: page3Img,
        type: SectionType.right, 
        text: '2023 Collection Lookbook ANC',
    },
    {
        id: 4,
        heading: 'Corduroy',
        link: false,
        imageUrl: page4Img,
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