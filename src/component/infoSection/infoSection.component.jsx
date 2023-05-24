import Typo, { TypoType } from "../typo/typo.component";
import { InfoContainer, TitleContainer } from "./infoSection.styled";

const InfoSection = ({props}) => {
const {id, heading, text} = props

    return (
        <InfoContainer>
            <TitleContainer>
                <Typo type={TypoType.headline_4}>{heading}</Typo>
                <Typo type={TypoType.body_3} color='var(--color-hover)'>0{id}</Typo>
            </TitleContainer>
            <Typo type={TypoType.body_4} maxWidth='35.5'>{text}</Typo>
        </InfoContainer>
    )
}

export default InfoSection;