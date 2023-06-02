import Typo, { TypoType } from "../typo/typo.component";
import { CardContainer , CardImg} from "./cardAccount.styled";

const CardAccount = ({props}) => {
    const {title, text, imageUrl} = props
    return (
        <CardContainer>
            <CardImg src={imageUrl}/>
            <Typo type={TypoType.body_1} color='black'>{title}</Typo>
            <Typo type={TypoType.body_4} color='black'>{text}</Typo>
        </CardContainer>
    )
}

export default CardAccount;