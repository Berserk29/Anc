import Typo, {TypoType} from "../typo/typo.component";
import { TitleContainer, NewContainer } from "./alwaysHeading.styled";

const AlwaysHeading = () => {

    return (
    <TitleContainer>
        <Typo type={TypoType.title_1} flex='center' marginRight='6'>Always</Typo>
        <NewContainer>
            <Typo type={TypoType.title_3}>New</Typo>
            <Typo type={TypoType.body_3}>Urban style</Typo>
        </NewContainer>
        <Typo type={TypoType.title_1} flex='end'>Creative</Typo>
    </TitleContainer>  
    )
}

export default AlwaysHeading;