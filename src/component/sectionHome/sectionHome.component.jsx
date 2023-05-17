import { Fragment, forwardRef } from "react";
import { 
    Section,
    HalfImage,
    HalfText,
    TextContainer,
    TextCss,
    FullText,
    FullImage,
    InstaContainer,
} from "./sectionHome.styled";
import Heading, { HeadingType } from "../heading/heading.component";
import PageIndex from "../pageIndex/pageIndex.component";
import ViewBtn from "../viewBtn/viewBtn.component";

export const SectionType = {
    left: 'left',
    right: 'right',
    full: 'full',
    noImg: 'noImg',
} 

const SectionHome = forwardRef(({props}, ref) => {
    const {imageUrl, type, text, heading, id, link = false } = props;

    const SectionChoice = () => {
        if(type === 'left' || type === 'right') 
        return (
            <Fragment>
                {type === 'left' && <HalfImage image={imageUrl}/>}
                <HalfText>
                    <TextContainer>
                        <Heading size='4' type={HeadingType.double} title={heading}/>
                        <TextCss>{text}</TextCss>
                        {link && <ViewBtn link={link}/>}
                    </TextContainer>
                </HalfText>
                {type === 'right' && <HalfImage image={imageUrl}/>}
            </Fragment>
        )
        
        if(type === 'full') 
        return (
            <FullImage image={imageUrl}>
                <Heading size='6.5' type={HeadingType.subMain} title={heading}/>
                <Heading size='1.4' type={HeadingType.subArial} title={text}/>
                {link && <ViewBtn link={link}/>}
            </FullImage>
        )

        if(type === 'noImg')
        return (
            <FullText>
                <InstaContainer>
                    <Heading size='3.6' type={HeadingType.double} title={heading}/>
                    <TextCss>{text}</TextCss>
                    {link && <ViewBtn link={link} text="Follow us"/>}
                </InstaContainer>
            </FullText>
        )
    }

    return(
        <Section ref={ref}>
            {/* <PageIndex page={id}/> */}
            <SectionChoice />
        </Section>
    )
});

SectionHome.displayName = 'SectionHome';

export default SectionHome;