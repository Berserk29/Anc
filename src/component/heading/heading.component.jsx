import { Fragment } from "react";
import { MainHeading, ArialHeading, SubArialHeading, HoverArialHeading, HeadingMain, HeadingArial} from "./heading.styled";

export const HeadingType = {
    main: 'main',
    arial: 'arial',
    subArial: 'subArial',
    subMain: 'subMain',
    hoverArial: 'hoverArial',
    double: 'double'
}


const Heading = ({size, type , title, flex = false, marginLeft = false, marginRight = false }) => {


    const HeadingChoice = function () {
        if(type === 'main') return <MainHeading size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</MainHeading>
        if(type === 'arial') return <ArialHeading size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</ArialHeading>
        if(type === 'subArial') return <SubArialHeading size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</SubArialHeading>
        if(type === 'subMain') return <HeadingMain size={size} flex={flex && flex} marginLeft={marginLeft && marginLeft} marginRight={marginRight && marginRight}>{title}</HeadingMain>
        if(type === 'hoverArial') return <HoverArialHeading size={size} flex={flex && flex} marginRight={marginRight && marginRight} marginLeft={marginLeft && marginLeft}>{title}</HoverArialHeading>
        if(type === 'double') return (
            <div>
                <HeadingMain size={size}>{title.slice(0, 2)}</HeadingMain>
                <HeadingArial size={size}>{title.slice(2)}</HeadingArial>
            </div>
        )
    }

    return ( 
        <Fragment>{HeadingChoice()}</Fragment>
    )
}

export default Heading;