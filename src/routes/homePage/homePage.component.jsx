import { useRef, useEffect, useContext} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import NumContext from "../../context/numIndex.context";

import Typo, {TypoType} from "../../component/typo/typo.component";
import SectionHome from "../../component/sectionHome/sectionHome.component";
import PageIndex from "../../component/pageIndex/pageIndex.component";
import AlwaysHeading from "../../component/alwaysHeading/alwaysHeading.component";
import Footer from "../../component/footer/footer.component";
import { sectionArray, arrowDown, headerImg, totalPage } from "./homePage.data";
import { homeDebounce } from "../../helper/helperFunction";
import { variantOpacity } from "../../helper/animationMotion";

import { 
    HomePageContainer,
    Header,
    ScrollContainer,
    ArrowDown,
    HomeFooter
} from "./homePage.styled";
import Navigation from "../../component/navigation/navigation.component";

 const HomePage = () => {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const control = useAnimation();
    const containerRef = useRef(null)
    const {ref: ref1, inView: inView1} = useInView({threshold: 0.5})
    const {ref: ref6, inView: inView6} = useInView({threshold: 0.5})
    const {setNumIndex} = useContext(NumContext)

    const isTablet = useMediaQuery(mediaQuery.useTablet)

    useEffect(() => {
        if(inView6) return setNumIndex(totalPage)
        if(inView1) {
            control.start('visible')
            return setNumIndex(1)
        }
        else {
            control.start('hidden')
        }
    },[inView1, inView6, setNumIndex, control])

    useEffect(() => {
        const container = containerRef.current;
        container.focus()
    }, [])    


    // INFO SCROLLING (WHEEL EVENT)
    useEffect(() => {
        const container = containerRef.current;
        container.focus()
        let containerScrollTop;
        let scrollDistance;
        let prevDeltaY = 0;

        const scrolling = () => {
            container.scrollTo({
                top: containerScrollTop + scrollDistance,
                behavior: 'smooth'
            });
        }
        const debounceScrolling = homeDebounce(scrolling, 200)

        const smoothScroll = event => {

            // INFO Firefox && Safari bug when preventDefault
            if(!isFirefox && !isSafari) {
                event.preventDefault();
            }
            
            // INFO To limit the amount of touchpad wheel event
            if(event.deltaY === prevDeltaY ) return;
            if(event.deltaY <= 29 && event.deltaY >= -29) return;
            
            containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            scrollDistance = event.deltaY > 0 ? containerHeight : -containerHeight;
            prevDeltaY = event.deltaY

            debounceScrolling();
        };
        
        container.addEventListener('wheel', smoothScroll, { passive: false });        
        return () => {
            container.removeEventListener('wheel', smoothScroll);
        };
    }, [])


    return (
        <HomePageContainer tabIndex={0}  ref={containerRef}>
            <Navigation />
            { !isTablet && <PageIndex/>}
                <Header ref={ref1} image={headerImg}>
                    <motion.div
                        variants={variantOpacity}
                        initial='hidden'
                        animate={control}    
                    >
                        <AlwaysHeading/>
                    </motion.div>
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