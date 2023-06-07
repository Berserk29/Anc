import { Fragment, useContext, useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { variantUp1, variantUp2, variantUp3, variantUp4, variantUp5, scaleUp} from "../../helper/animationMotion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import NumContext from "../../context/numIndex.context";

import Typo, {TypoType} from "../typo/typo.component";
import ViewBtn from "../viewBtn/viewBtn.component";

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
    const {imageUrl, imageUrl2, imageUrl3, type, text, heading, id, link = false } = props;
    const { setNumIndex } = useContext(NumContext)
    const [carouselNum, setCarouselNum] = useState(0);

    
    const {ref , inView} = useInView({threshold: 0.7});
    const control = useAnimation();

    const isTablet = useMediaQuery(mediaQuery.useTablet);

    useEffect(() => {
        if(inView) {
            setNumIndex(id)
            control.start('visible');
        }
    },[control, inView])
    
    const typoSection = () => (
        <>
        <motion.div variants={variantUp1} initial='hidden' animate={control}><Typo type={TypoType.double}>{heading}</Typo></motion.div>
        <motion.div variants={variantUp2} initial='hidden' animate={control}><Typo type={TypoType.body_4}>{text}</Typo></motion.div>
        <motion.div variants={variantUp3} initial='hidden' animate={control}>{link && <ViewBtn link={link}/>}</motion.div>
        </>
    )

    const imgControl = (i, activeOpacity, nonActiveOpacity) => {
        if(i === carouselNum) return activeOpacity
        return nonActiveOpacity
    }

    const BtnHandler = (i) => setCarouselNum(i)

    // To make the sectionChoice animation work --> sectionChoice need to be used as a function and not a Component
    
    // TODO THE FULLIMG IS A CAROUSEL


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
                <CarouselText variants={variantUp5} initial='hidden' animate={control}>
                    <Typo type={TypoType.body_3}>01</Typo>
                    <Typo type={TypoType.title_2}>Corduroy</Typo>
                    <Typo type={TypoType.body_3}>for the 23 SS Season</Typo>
                </CarouselText>
                <CarouselImg image={imageUrl} opacity={imgControl(0, 1, 0)} position='30%'/>
                <CarouselImg image={imageUrl2} opacity={imgControl(1, 1, 0)} position='left'/>
                <CarouselImg image={imageUrl3} opacity={imgControl(2, 1, 0)} position='70% '/>
                <CarouselBtnContainer variants={variantUp5} initial='hidden' animate={control}>
                    <CarouselBtn onClick={() => BtnHandler(0)} opacity={imgControl(0, 1, .6)}/>
                    <CarouselBtn onClick={() => BtnHandler(1)} opacity={imgControl(1, 1, .6)}/>
                    <CarouselBtn onClick={() => BtnHandler(2)} opacity={imgControl(2, 1, .6)}/>
                </CarouselBtnContainer>
            </CarouselContainer>
        )

        if(type === 'noImg')
        return (
            <FullText variants={variantUp4} initial='hidden' animate={control}>
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