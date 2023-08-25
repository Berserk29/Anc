import { Fragment, useContext, useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { variantUp1, variantUp2, variantUp3, variantUp4, scaleUp} from "../../helper/animationMotion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import NumContext from "../../context/numIndex.context";

import Typo, {TypoType} from "../typo/typo.component";
import ViewBtn from "../viewBtn/viewBtn.component";
import { carouselArr, carouselBtnArr } from "./sectionHome.data";

import { 
    Section,
    HalfImage,
    HalfText,
    TextContainer,
    FullText,
    InstaContainer,
    ResponsiveSection,
    ResTextContainer,
    CarouselContainer,
    CarouselImg,
    CarouselText,
    CarouselBtnContainer,
    CarouselBtn
} from "./sectionHome.styled";

export const SectionType = {
    left: 'left',
    right: 'right',
    carousel: 'carousel',
    noImg: 'noImg',
} 

const SectionHome = ({props}) => {
    const {imageUrl, type, text, heading, id, link = false } = props;
    const { setNumIndex } = useContext(NumContext)
    const [carouselNum, setCarouselNum] = useState(0);
    const {ref , inView} = useInView({threshold: 0.05});
    const control = useAnimation();
    const isTablet = useMediaQuery(mediaQuery.useTablet);
    
    const btnHandler = (i) => setCarouselNum(i)

    useEffect(() => {
        if(inView) {
            setNumIndex(id)
            control.start('visible');
        }
        else control.start('hidden')
    },[control, inView])

    useEffect(() => { 
        if(!inView) return;
        const interval = setInterval(() => {
            carouselNum === 2 ? setCarouselNum(0) : setCarouselNum(carouselNum + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [carouselNum, inView])

    const typoSection = () => (
        <>
        <motion.div variants={variantUp1} initial='hidden' animate={control}><Typo type={TypoType.double}>{heading}</Typo></motion.div>
        <motion.div variants={variantUp2} initial='hidden' animate={control}><Typo type={TypoType.body_4}>{text}</Typo></motion.div>
        <motion.div variants={variantUp3} initial='hidden' animate={control}>{link && <ViewBtn link={link}/>}</motion.div>
        </>
    )

    // INFO To make the sectionChoice animation work --> sectionChoice need to be used as a function and not a Component

    const sectionChoice = () => {
        if(isTablet && type !== 'noImg' && type !== 'carousel') 
        return (
            <ResponsiveSection image={imageUrl} position={type === 'left' ? 'right' : 'left'}>
                    <ResTextContainer>
                        {typoSection()}
                    </ResTextContainer>
            </ResponsiveSection>
        )

        if(type === 'left' || type === 'right') 
        return (
            <Fragment>
                {type === 'left' && <HalfImage image={imageUrl}/>}
                <HalfText>
                    <TextContainer>
                        {typoSection()}
                    </TextContainer>
                </HalfText>
                {type === 'right' && <HalfImage image={imageUrl}/>}
            </Fragment>
        )
        
        if(type === 'carousel') 
        return (
            <CarouselContainer variants={scaleUp} initial='hidden' animate={control}>
                <CarouselText variants={variantUp4} initial='hidden' animate={control}>
                    <Typo type={TypoType.body_3}>01</Typo>
                    <Typo type={TypoType.title_2}>Corduroy</Typo>
                    <Typo type={TypoType.body_3}>for the 23 SS Season</Typo>
                </CarouselText>
                {carouselArr.map(el => <CarouselImg key={el.id} image={el.carouselImg} isActive={carouselNum === el.id} position={el.position}/>)}
                <CarouselBtnContainer variants={variantUp4} initial='hidden' animate={control}>
                    {carouselBtnArr.map(el => <CarouselBtn key={el} onClick={() => btnHandler(el)} isActive={carouselNum === el}/> )}
                </CarouselBtnContainer>
            </CarouselContainer>
        )

        if(type === 'noImg')
        return (
            <FullText variants={variantUp2} initial='hidden' animate={control}>
                <InstaContainer>
                    <Typo type={TypoType.double}>{heading}</Typo>
                    <Typo type={TypoType.body_4}>{text}</Typo>
                    {link && <ViewBtn link={link} text="Follow us"/>}
                </InstaContainer>
            </FullText>
        )
    }

    return(
        <Section ref={ref}>
            {sectionChoice()}
        </Section>
    )
};

export default SectionHome;