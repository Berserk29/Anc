import { SectionType } from '../../component/sectionHome/sectionHome.component'
import arrow from '../../assets/icon/arrow-down.png'

export const arrowDown = arrow;
export const headerImg = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_header.jpg?alt=media&token=3fa48345-1a7f-4fd9-8028-3f5da5cf889a&_gl=1*1xj4akn*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTY0NjY5OS4xNS4xLjE2ODU2NDY3MTguMC4wLjA.'
const homeImg2 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_02.jpg?alt=media&token=05390d48-282b-4ced-9ec2-537ae42af511&_gl=1*b2pxwy*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTY0NjY5OS4xNS4xLjE2ODU2NDY3NzkuMC4wLjA.'
const homeImg3 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_3.jpg?alt=media&token=8673c317-aa02-4bdf-8179-9f88743813e6&_gl=1*1pgy0sp*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTY0NjY5OS4xNS4xLjE2ODU2NDY5MjkuMC4wLjA.'
const homeCarousel1 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/image_1630941045802_2500%202.jpg?alt=media&token=b10147f6-2266-4880-9eaf-edad033ac498&_gl=1*1hz9g5z*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NjE2NTUxNS4yMC4xLjE2ODYxNjU2MTMuMC4wLjA.'
const homeCarousel2 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/image_1631613861180_2500%201.jpg?alt=media&token=86740e24-3262-4408-b94a-78d689039d43&_gl=1*1xlh66y*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NjE2NTUxNS4yMC4xLjE2ODYxNjU2MjkuMC4wLjA.'
const homeCarousel3 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_10.jpg?alt=media&token=82d3fd56-4e0e-4b25-b853-335906453466&_gl=1*1fmgnx*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NjE2NTUxNS4yMC4xLjE2ODYxNjU1NjYuMC4wLjA.'

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
        imageUrl: homeCarousel1,
        imageUrl2: homeCarousel2,
        imageUrl3: homeCarousel3,
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