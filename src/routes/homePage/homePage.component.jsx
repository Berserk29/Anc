import { useRef, useEffect} from "react";
import Heading, { HeadingType } from "../../component/heading/heading.component";
import PageIndex from "../../component/pageIndex/pageIndex.component";

import { 
    HomePageContainer,
    Header,
    TitleContainer,
    NewContainer,
    HomeContainer,
    ScrollContainer,
    ArrowDown,
    HomeContainerTest
} from "./homePage.styled";

import arrowDown from '../../assets/icon/arrow-down.png'

// TESTING
import headerImg from '../../assets/home/main_carousel-0.png'


const sectionArray = [
    {
        id: 2,
        heading: 'About',
    },
    {
        id: 3,
        heading: 'Shop',
    },
    {
        id: 4,
        heading: 'Corduroy',
    },
    {
        id: 5,
        heading: 'Instagram',
    },
] 

 const HomePage = () => {
    const containerRef = useRef(null)
    const refs = useRef([]);


    const smoothScroll = event => {
        event.preventDefault();
        
        const container = containerRef.current;
        const containerScrollTop = container.scrollTop;
        const scrollDistance = event.deltaY * 2

        container.scrollTo({
            top: containerScrollTop + scrollDistance,
            behavior: 'smooth'
          });
    };

    useEffect(() => {
        const container = containerRef.current;

        container.focus()
        container.addEventListener('wheel', smoothScroll, { passive: false });
    
        return () => {
          container.removeEventListener('wheel', smoothScroll);
        };
    }, [])

    const handleDiscover = () => refs.current[2].scrollIntoView({behavior: 'smooth'})


    return (
        <HomePageContainer tabIndex={0}  ref={containerRef}>
            <Header ref={(element) => {refs.current[1] = element}} image={headerImg}>
                <TitleContainer>
                    <Heading size='8.6' type={HeadingType.main} flex='center' marginRight='6.5' title='Always'/>
                    <NewContainer>
                        <Heading size='8.6' type={HeadingType.arial} title='New'/>
                        <Heading size='1.4' type={HeadingType.subArial} title='Urban Style'/>
                    </NewContainer>
                    <Heading size='8.6' type={HeadingType.main} flex='end' title='Creative'/>
                </TitleContainer>
                <PageIndex page='1'/>
                <ScrollContainer onClick={handleDiscover}>
                    <Heading size='1.4' type={HeadingType.hoverArial} title='Scroll to discover' />
                    <ArrowDown src={arrowDown} alt="arrow" />
                </ScrollContainer>
            </Header>
            {sectionArray.map((el) => <HomeContainerTest key={el.id} ref={(element) => {refs.current[el.id] = element}}
            >{el.heading}</HomeContainerTest>)}
            <HomeContainer ref={(element) => {refs.current[6] = element}}>
                <h1>Footer</h1>
            </HomeContainer>
        </HomePageContainer>
    )
}

export default HomePage;