import { Fragment, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
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
    FullImage,
    InstaContainer,
    ResponsiveSection,
    ResTextContainer
} from "./sectionHome.styled";

export const SectionType = {
    left: 'left',
    right: 'right',
    full: 'full',
    noImg: 'noImg',
} 

const SectionHome = ({props}) => {
    const {imageUrl, type, text, heading, id, link = false } = props;
    const {ref: sectionRef, inView} = useInView({threshold: 0.5});
    const controls = useAnimation();
    const { setNumIndex } = useContext(NumContext)
    
    const isTablet = useMediaQuery(mediaQuery.useTablet);

    useEffect(() => {
        if(inView) {
            setNumIndex(id)
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView, setNumIndex, id])
    
    const SectionChoice = () => {
        if(isTablet && type !== 'noImg' && type !== 'full') 
        return (
            <ResponsiveSection image={imageUrl} position={type === 'left' ? 'right' : 'left'}>
                    <ResTextContainer>
                        <Typo type={TypoType.double}>{heading}</Typo>
                        <Typo type={TypoType.body_4}>{text}</Typo>
                        {link && <ViewBtn link={link}/>}
                    </ResTextContainer>
            </ResponsiveSection>
        )


        if(type === 'left' || type === 'right') 
        return (
            <Fragment>
                {type === 'left' && <HalfImage image={imageUrl}/>}
                <HalfText>
                    <TextContainer>
                        <Typo type={TypoType.double}>{heading}</Typo>
                        <Typo type={TypoType.body_4}>{text}</Typo>
                        {link && <ViewBtn link={link}/>}
                    </TextContainer>
                </HalfText>
                {type === 'right' && <HalfImage image={imageUrl}/>}
            </Fragment>
        )
        
        if(type === 'full') 
        return (
            <FullImage image={imageUrl}>
                {link && <ViewBtn link={link}/>}
            </FullImage>
        )

        if(type === 'noImg')
        return (
            <FullText>
                <InstaContainer>
                    <Typo type={TypoType.double}>{heading}</Typo>
                    <Typo type={TypoType.body_4}>{text}</Typo>
                    {link && <ViewBtn link={link} text="Follow us"/>}
                </InstaContainer>
            </FullText>
        )
    }

    return(
        <Section ref={sectionRef}>
            <SectionChoice />
        </Section>
    )
};

export default SectionHome;