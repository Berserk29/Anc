import { useContext } from "react"
import { BoxContainer, BoxItems, TotalContainer } from "./navBox.styled"
import { CartContext } from "../../context/cart.context"
import { LikedContext } from "../../context/liked.context"
import Typo, { TypoType } from "../typo/typo.component"
import { userArr } from "./navBox.data"
import NavBoxItem from "../navBoxItem/navBoxItem.component"
import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"
import { useMediaQuery } from "react-responsive"
import mediaQuery from "../../helper/mediaQuery"

const NavBox = ({type}) => {
    const {cartItems, cartTotalPrice} = useContext(CartContext)
    const {likedItems} = useContext(LikedContext)
    
    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)

    const tripeChoice = (choice1, choice2, choice3) => {
        if(type === 1) return choice1
        if(type === 2) return choice2
        if(type === 3) return choice3
        return ''
    }
    
    if(isSmTablet && type === 1) return ;

    // TODO DOING THE MEDIA QUERY
    
    return (
        <>
        {tripeChoice( userArr , likedItems, cartItems).length ? 
            <BoxContainer 
                right={tripeChoice(100, 50, 0)} 
                height={tripeChoice(220, 454, 460)} 
                width={tripeChoice(156,205,363)}
                padding={tripeChoice(16, 24, 24)} 
            >
                <BoxItems gap={tripeChoice(0,2,1)} height={tripeChoice('','','350px')}>
                    {tripeChoice(true, false, false) && <Typo type={TypoType.body_1} color='black' marginBottom='1'>My Account</Typo> }  
                    {tripeChoice( userArr , likedItems, cartItems).map((el,i) => <NavBoxItem key={i} props={el} type={type}/>)}
                </BoxItems>
                    {tripeChoice(false, false, true) &&
                    <>
                        <TotalContainer>
                            <Typo type={TypoType.arialSize} color='black' size='1.6' weight='700' transform='capitalize'>Total</Typo>
                            <Typo type={TypoType.arialSize} color='black' size='1.6' weight='700' transform='capitalize'>${cartTotalPrice}</Typo>
                        </TotalContainer>
                        <BoxBtn type={BoxBtnType.radio} w='31.5' h='6' link='/account'>Checkout</BoxBtn>
                    </>    
                    }
            </BoxContainer>
                :
            <BoxContainer
                right={tripeChoice(100,50,0)}
                height='100'
                width='140'
                padding='12'
            >
                <Typo color='black' type={TypoType.body_1}>Your {tripeChoice('cart', 'favorite', 'cart')} is empty</Typo>
            </BoxContainer>    
        }
        </>        
    )
}

export default NavBox