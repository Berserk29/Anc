import { useRef, useEffect} from "react";


import Heading, { HeadingType } from "../../component/heading/heading.component";
import SectionHome from "../../component/sectionHome/sectionHome.component";
import PageIndex from "../../component/pageIndex/pageIndex.component";
import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import Footer from "../../component/footer/footer.component";
import { sectionArray } from "./homePage.data";

import { 
    HomePageContainer,
    Header,
    ScrollContainer,
    ArrowDown,
    HomeFooter
} from "./homePage.styled";

import arrowDown from '../../assets/icon/arrow-down.png'
// TODO PUT REAL HEADER IMG
import headerImg from '../../assets/home/main_carousel-0.png'


 const HomePage = () => {
    const containerRef = useRef(null)
    const refs = useRef([]);

    const smoothScroll = event => {
        event.preventDefault();
        
        const container = containerRef.current;
        const containerScrollTop = container.scrollTop;
        const scrollDistance = event.deltaY * 1.5

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

    // TODO MAKE CHANGE THE PAGEINDEX BY KNOWING WITCH REF YOU ARE PRESENTLY

    return (
        <HomePageContainer tabIndex={0}  ref={containerRef}>
            <PageIndex page='99'/>
            <Header ref={(element) => {refs.current[1] = element}} tabIndex={1} image={headerImg}>
                <AlwaysHeading/>
                <ScrollContainer onClick={handleDiscover}>
                    <Heading size='1.4' type={HeadingType.hoverArial} title='Scroll to discover' />
                    <ArrowDown src={arrowDown} alt="arrow" />
                </ScrollContainer>
            </Header>
            {sectionArray.map((el) => <SectionHome key={el.id} props={el} ref={(element) => {refs.current[el.id] = element}}/>)}
            <HomeFooter ref={(element) => {refs.current[6] = element}}>
                <Footer />
            </HomeFooter>
        </HomePageContainer>
    )
}

export default HomePage;

// TODO delete all npm package not used  