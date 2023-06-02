import Typo, { TypoType } from "../typo/typo.component";
import { useNavigate } from "react-router-dom";
import { ProductContainer, ImgProduct, FlexContainer, LikedImg} from "./navBoxItem.styled";
import { useContext } from "react";
import { LikedContext } from "../../context/liked.context";

const NavBoxItem = ({props, type}) => {
    const {setNavButton} = useContext(LikedContext)
    const {name, imageUrl, price, quantity, size, totalPrice, imageUrlHover, id, link} = props
    const navigate = useNavigate()

    const linkHandler = () => {
        setNavButton(0)
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
        <ProductContainer flex={tripeChoice('column','column','row')} border={tripeChoice(false, true, true)} >
            { tripeChoice(true, false, false) && <div onClick={linkHandler} ><Typo type={TypoType.body_4} color='black' hover={true} >{name}</Typo></div>}
            { tripeChoice(false,false,true) && 
            <>
                <ImgProduct image={imageUrl}/> 
                <FlexContainer gap='3'>
                    <FlexContainer gap='.8'>
                        <Typo type={TypoType.arialSize} color='black' size='1.4' weight='700' transform='capitalize'>{name}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.4' weight='700'>${price}</Typo>
                    </FlexContainer>
                    <FlexContainer gap='.5'>
                        <Typo type={TypoType.arialSize} color='black' size='1.2' weight='400' transform='capitalize'>Quantity: {quantity}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.2' weight='400' transform='capitalize'>Size: {size}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.2' weight='700' transform='capitalize'>Total: ${totalPrice}</Typo>
                    </FlexContainer>
                </FlexContainer>

            </>
            }
            { tripeChoice(false, true, false) && 
                <>
                    <LikedImg image={imageUrlHover} onClick={likedHandler}/>
                    <Typo type={TypoType.arialSize} color='black' size='1.4' weight='700' transform='capitalize'>{name}</Typo>
                </>
            }
        </ProductContainer>
    )
}

export default NavBoxItem