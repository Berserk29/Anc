import { useNavigate } from "react-router-dom";

import Typo, { TypoType } from "../typo/typo.component";
import { CardContainer , CardImg} from "./cardAccount.styled";

import { signOutUser } from "../../utiles/firebase/firebase.utiles";

const CardAccount = ({props}) => {
    const {title, text, imageUrl, link} = props
    const navigate = useNavigate();

    const clickHandle = () =>{
        if(title === 'Logout') return signOutUser()
        navigate(`/account${link}`)
    }

    return (
        <CardContainer onClick={clickHandle}>
            <CardImg src={imageUrl}/>
            <Typo type={TypoType.body_1} color='black'>{title}</Typo>
            <Typo type={TypoType.body_4} color='black'>{text}</Typo>
        </CardContainer>
    )
}

export default CardAccount;