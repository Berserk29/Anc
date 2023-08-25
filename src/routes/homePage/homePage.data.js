import { SectionType } from '../../component/sectionHome/sectionHome.component'
import arrow from '../../assets/icon/arrow-down.png'

export const arrowDown = arrow;
export const headerImg = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_header.jpg?alt=media&token=3fa48345-1a7f-4fd9-8028-3f5da5cf889a&_gl=1*1xj4akn*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTY0NjY5OS4xNS4xLjE2ODU2NDY3MTguMC4wLjA.'
const homeImg2 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_02.jpg?alt=media&token=05390d48-282b-4ced-9ec2-537ae42af511&_gl=1*b2pxwy*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTY0NjY5OS4xNS4xLjE2ODU2NDY3NzkuMC4wLjA.'
const homeImg3 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_3.jpg?alt=media&token=8673c317-aa02-4bdf-8179-9f88743813e6&_gl=1*1pgy0sp*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTY0NjY5OS4xNS4xLjE2ODU2NDY5MjkuMC4wLjA.'

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
        link: 'shop',
        imageUrl: homeImg3,
        type: SectionType.right, 
        text: '2023 Collection Lookbook ANC',
    },
    {
        id: 4,
        heading: 'Corduroy',
        link: false,
        type: SectionType.carousel,
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