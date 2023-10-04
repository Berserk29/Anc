import { SectionType } from '../../component/sectionHome/sectionHome.component'
import arrow from '../../assets/icon/arrow-down.png'

export const arrowDown = arrow;
export const headerImg = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_header.jpg?alt=media&token=c22bc525-07c2-4c6c-95f3-6ab075c79ad5&_gl=1*elbpeu*_ga*ODEyNTY3MTg5LjE2OTY0NTM0NDc.*_ga_CW55HF8NVT*MTY5NjQ1MzQ0Ny4xLjEuMTY5NjQ1MzU1OS4zMS4wLjA.'
const homeImg2 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_02.jpg?alt=media&token=c2495212-68a5-454e-ab22-39a4f998ed88&_gl=1*1exzpb5*_ga*ODEyNTY3MTg5LjE2OTY0NTM0NDc.*_ga_CW55HF8NVT*MTY5NjQ1MzQ0Ny4xLjEuMTY5NjQ1NDE5NS4yNC4wLjA.'
const homeImg3 = 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/home_3.jpg?alt=media&token=e332db7a-09fc-4de8-a4cf-8dbbd909ee3c&_gl=1*hfedk1*_ga*ODEyNTY3MTg5LjE2OTY0NTM0NDc.*_ga_CW55HF8NVT*MTY5NjQ1MzQ0Ny4xLjEuMTY5NjQ1NDE1OS42MC4wLjA.'

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