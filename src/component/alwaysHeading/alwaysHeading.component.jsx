import Heading, { HeadingType } from "../../component/heading/heading.component";
import { TitleContainer, NewContainer } from "./alwaysHeading.styled";

const AlwaysHeading = () => {

    return (
    <TitleContainer>
        <Heading size='8.6' type={HeadingType.main} flex='center' marginRight='6.5' title='Always'/>
        <NewContainer>
            <Heading size='8.6' type={HeadingType.arial} title='New'/>
            <Heading size='1.4' type={HeadingType.subArial} title='Urban Style'/>
        </NewContainer>
        <Heading size='8.6' type={HeadingType.main} flex='end' title='Creative'/>
    </TitleContainer>  
    )
}

export default AlwaysHeading;