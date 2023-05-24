import { Fragment } from "react";

import { 
    Title01,
    Title02,
    Title03,
    Headline01,
    Headline02,
    Headline03,
    Headline04,
    Headline05,
    Body01,
    Body02,
    Body03,
    BodyDash03,
    Body04,
    Body05,
    Body06,
    Double01,
    Double02,
    DoubleContainer,
} from "./typo.styled";

export const TypoType = {
    title_1: 'title_1', 
    title_2: 'title_2', 
    title_3: 'title_3', 
    headline_1: 'headline_1', 
    headline_2: 'headline_2', 
    headline_3: 'headline_3', 
    headline_4: 'headline_4', 
    headline_5: 'headline_5',
    body_1: 'body_1',  
    body_2: 'body_2',  
    body_3: 'body_3',  
    body_3_dash: 'body_3_dash',  
    body_4: 'body_4',  
    body_5: 'body_5',  
    body_6: 'body_6',
    double: 'double',  
};

const Typo = ({type, color, flex, marginLeft, marginRight, opacity, hover, children}) => {

    const commonProps = {
        color: color || undefined,
        flex: flex || undefined,
        marginLeft: marginLeft || undefined,
        marginRight: marginRight || undefined,
        opacity: opacity || undefined,
        hover: hover || undefined,
      };

    const TypoChoice = () => {
        if(type === 'title_1') return <Title01 {...commonProps}>{children}</Title01>
        if(type === 'title_2') return <Title02 {...commonProps}>{children}</Title02>
        if(type === 'title_3') return <Title03 {...commonProps}>{children}</Title03>
        if(type === 'headline_1') return <Headline01 {...commonProps}>{children}</Headline01>
        if(type === 'headline_2') return <Headline02 {...commonProps}>{children}</Headline02>
        if(type === 'headline_3') return <Headline03 {...commonProps}>{children}</Headline03>
        if(type === 'headline_4') return <Headline04 {...commonProps}>{children}</Headline04>
        if(type === 'headline_5') return <Headline05 {...commonProps}>{children}</Headline05>
        if(type === 'body_1') return <Body01 {...commonProps}>{children}</Body01>
        if(type === 'body_2') return <Body02 {...commonProps}>{children}</Body02>
        if(type === 'body_3') return <Body03 {...commonProps}>{children}</Body03>
        if(type === 'body_3_dash') return <BodyDash03 {...commonProps}>{children}</BodyDash03>
        if(type === 'body_4') return <Body04 {...commonProps}>{children}</Body04>
        if(type === 'body_5') return <Body05 {...commonProps}>{children}</Body05>
        if(type === 'body_6') return <Body06 {...commonProps}>{children}</Body06>
        if(type === 'double') return (
            <DoubleContainer>
                <Double01 {...commonProps}>{children.slice(0, 2)}</Double01>
                <Double02 {...commonProps}>{children.slice(2)}</Double02>
            </DoubleContainer>
        )
    }

    return ( 
        <Fragment>
            <TypoChoice/>
        </Fragment>
    )
}

export default Typo;