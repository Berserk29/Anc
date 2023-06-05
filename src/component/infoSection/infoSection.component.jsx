import Typo, { TypoType } from "../typo/typo.component";
import { InfoContainer, TitleContainer } from "./infoSection.styled";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

const InfoSection = ({props}) => {
const {id, heading, text} = props
const isTablet = useMediaQuery(mediaQuery.useTablet)

    return (
        <InfoContainer>
            <TitleContainer>
                <Typo type={TypoType.headline_4}>{heading}</Typo>
                <Typo type={TypoType.body_3} color='var(--color-hover)'>0{id}</Typo>
            </TitleContainer>
            <Typo type={TypoType.body_4} maxWidth={!isTablet ? 35.5 : 70} marginRight='1'>{text}</Typo>
        </InfoContainer>
    )
}

// '35.5'
export default InfoSection;