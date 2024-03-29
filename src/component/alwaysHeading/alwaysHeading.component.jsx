import Typo, {TypoType} from "../typo/typo.component";
import { TitleContainer, NewContainer } from "./alwaysHeading.styled"
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";


// 6

const AlwaysHeading = () => {
    const isMobile = useMediaQuery(mediaQuery.useMobile)

    return (
    <TitleContainer>
        <Typo type={TypoType.title_1} flex='center' marginRight={!isMobile ? 6 : 0}>Always</Typo>
        <NewContainer>
            <Typo type={TypoType.title_3}>New</Typo>
            <Typo type={TypoType.body_3}>Urban style</Typo>
        </NewContainer>
        <Typo type={TypoType.title_1} flex='flex-end' marginRight={!isMobile ? 2 : 0}>Creative</Typo>
    </TitleContainer>  
    )
}

export default AlwaysHeading;