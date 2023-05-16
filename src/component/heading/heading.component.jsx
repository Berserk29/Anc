import { Fragment } from "react";
import { MainHeading, ArialHeading, SubArialHeading, HoverArialHeading, } from "./heading.styled";

export const HeadingType = {
    main: 'main',
    arial: 'arial',
    subArial: 'subArial',
    hoverArial: 'hoverArial',
    double: 'double'
}


const Heading = ({size, type , title, flex = false, marginLeft = false, marginRight = false }) => {


    const HeadingChoice = function () {
        if(type === 'main') return <MainHeading size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</MainHeading>
        if(type === 'arial') return <ArialHeading size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</ArialHeading>
        if(type === 'subArial') return <SubArialHeading size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</SubArialHeading>
        if(type === 'hoverArial') return <HoverArialHeading size={size} flex={flex && flex} marginRight={marginRight && marginRight} marginLeft={marginLeft && marginLeft}>{title}</HoverArialHeading>
        // if(type === 'double') return <DoubleHeading size={size}>{title}</DoubleHeading>
    }

    return ( 
        <Fragment>{HeadingChoice()}</Fragment>
    )
}

export default Heading;