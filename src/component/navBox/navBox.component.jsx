import { useContext } from "react"
import { BoxContainer, BoxItems, TotalContainer } from "./navBox.styled"
import { CartContext } from "../../context/cart.context"
import { LikedContext } from "../../context/liked.context"
import Typo, { TypoType } from "../typo/typo.component"
import { userArr } from "./navBox.data"
import NavBoxItem from "../navBoxItem/navBoxItem.component"
import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"

const NavBox = ({type}) => {
    const {cartItems, cartTotalPrice} = useContext(CartContext)
    const {likedItems} = useContext(LikedContext)
    
    const tripeChoice = (choice1, choice2, choice3) => {
        if(type === 1) return choice1
        if(type === 2) return choice2
        if(type === 3) return choice3
        return ''
    }


    // TODO DOING A LINK THE MY ACCOUNT AFTER CLICKING ON THE CHECKOUT BTN
    // TODO DOING THE LIKED BOX

    return (
        <BoxContainer 
            right={tripeChoice(175, 130, 80)} 
            height={tripeChoice(220, 454, 454)} 
            width={tripeChoice(156,363,363)}
            padding={tripeChoice(16, 24, 24)} 
        >
            <BoxItems>
                {tripeChoice(true, false, false) && <Typo type={TypoType.body_1} color='black' marginBottom='1'>My Account</Typo> }
                { tripeChoice( userArr , likedItems, cartItems).length ? 
                tripeChoice( userArr , likedItems, cartItems).map((el,i) => <NavBoxItem key={i} props={el} type={type}/>)
                    : <Typo type={TypoType.headline_3} color='black'>Your cart is empty</Typo>
                }
            </BoxItems>
                {tripeChoice(false, false, true) &&
                <>
                    <TotalContainer>
                        <Typo type={TypoType.arialSize} color='black' size='1.6' weight='700' transform='capitalize'>Total</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.6' weight='700' transform='capitalize'>${cartTotalPrice}</Typo>
                    </TotalContainer>
                    <BoxBtn type={BoxBtnType.radio} w='31.5' h='4.8'>Checkout</BoxBtn>
                </>    
                }
        </BoxContainer>
                
    )
}

export default NavBox