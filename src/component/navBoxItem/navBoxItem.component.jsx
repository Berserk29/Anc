import Typo, { TypoType } from "../typo/typo.component";
import { useNavigate } from "react-router-dom";
import { ProductContainer, ImgProduct, FlexContainer, LikedImg} from "./navBoxItem.styled";
import { useContext } from "react";
import { LikedContext } from "../../context/liked.context";
import { signOutUser } from "../../utiles/firebase/firebase.utiles";

const NavBoxItem = ({props, type}) => {
    const {setNavButton} = useContext(LikedContext)
    const {name, imageUrl, price, quantity, size, imageUrlHover, id, link} = props
    const navigate = useNavigate()


    const linkHandler = () => {
        setNavButton(0)
        if(props.name === 'Logout') return signOutUser()
        navigate(link)
    }
    const likedHandler = () => {
        setNavButton(0)
        navigate(`/shop/${props.type}${id}`)
    }

    const tripeChoice = (choice1, choice2, choice3) => {
        if(type === 1) return choice1
        if(type === 2) return choice2
        if(type === 3) return choice3
        return ''
    }
    

    return (
        <ProductContainer flex={tripeChoice('column','column','row')} border={tripeChoice(false, true, true)} datatype="navBox" >
            {tripeChoice(true, false, false) && <div onClick={linkHandler} ><Typo type={TypoType.body_4} color='black' hover={true} >{name}</Typo></div>}
            { tripeChoice(false,false,true) && 
            <>
                <ImgProduct image={imageUrl}/> 
                <FlexContainer gap='3' datatype="navBox">
                    <FlexContainer gap='.8' datatype="navBox">
                        <Typo type={TypoType.arialSize} color='black' size='1.4rem' weight='700' transform='capitalize'>{name}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.4rem' weight='700'>${price}</Typo>
                    </FlexContainer>
                    <FlexContainer gap='.5' datatype="navBox">
                        <Typo type={TypoType.arialSize} color='black' size='1.2rem' weight='400' transform='capitalize'>Quantity: {quantity}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.2rem' weight='400' transform='capitalize'>Size: {size}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.2rem' weight='700' transform='capitalize'>Total: ${quantity * price}</Typo>
                    </FlexContainer>
                </FlexContainer>

            </>
            }
            { tripeChoice(false, true, false) && 
                <>
                    <LikedImg image={imageUrlHover} onClick={likedHandler}/>
                    <Typo type={TypoType.arialSize} color='black' size='1.4rem' weight='700' transform='capitalize'>{name}</Typo>
                </>
            }
        </ProductContainer>
    )
}

export default NavBoxItem