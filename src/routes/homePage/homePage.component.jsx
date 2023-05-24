import { useRef, useEffect, useContext} from "react";
import { useInView } from "react-intersection-observer";
import NumContext from "../../context/numIndex.context";

import Typo, {TypoType} from "../../component/typo/typo.component";
import SectionHome from "../../component/sectionHome/sectionHome.component";
import PageIndex from "../../component/pageIndex/pageIndex.component";
import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import Footer from "../../component/footer/footer.component";
import { sectionArray, arrowDown, headerImg, totalPage } from "./homePage.data";

import { 
    HomePageContainer,
    Header,
    ScrollContainer,
    ArrowDown,
    HomeFooter
} from "./homePage.styled";
import Navigation from "../../component/navigation/navigation.component";

 const HomePage = () => {
    const containerRef = useRef(null)
    const {ref: ref1, inView: inView1} = useInView({threshold: 0.5})
    const {ref: ref6, inView: inView6} = useInView({threshold: 0.5})
    const {setNumIndex} = useContext(NumContext)

    useEffect(() => {
        if(inView1) return setNumIndex(1)
        if(inView6) return setNumIndex(totalPage)
    },[inView1, inView6, setNumIndex])

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


    return (
        <HomePageContainer tabIndex={0}  ref={containerRef}>
            <Navigation />
            <PageIndex/>
            <Header ref={ref1} image={headerImg}>
                <AlwaysHeading/>
                <ScrollContainer>
                    <Typo type={TypoType.body_3}>Scroll to discover</Typo>
                    <ArrowDown src={arrowDown} alt="arrow" />
                </ScrollContainer>
            </Header>
            {sectionArray.map((el) => <SectionHome key={el.id} props={el} />)}
            <HomeFooter ref={ref6}>
                <Footer/>
            </HomeFooter>
        </HomePageContainer>
    )
}

export default HomePage;
// ref={(element) => {refs.current[6] = element}}
// TODO delete all npm package not used  


  