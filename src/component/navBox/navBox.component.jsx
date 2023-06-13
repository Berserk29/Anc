import { useContext } from "react"
import { BoxContainer, BoxItems, TotalContainer, SignInContainer } from "./navBox.styled"
import { CartContext } from "../../context/cart.context"
import { LikedContext } from "../../context/liked.context"
import { UserContext } from "../../context/user.context"
import Typo, { TypoType } from "../typo/typo.component"
import { userArr } from "./navBox.data"
import NavBoxItem from "../navBoxItem/navBoxItem.component"
import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"
import { useMediaQuery } from "react-responsive"
import mediaQuery from "../../helper/mediaQuery"

const NavBox = ({type}) => {
    const { currentUser } = useContext(UserContext)
    const { cartItems, cartTotalPrice } = useContext(CartContext)
    const { likedItems } = useContext(LikedContext)
    
    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)

    const tripeChoice = (choice1, choice2, choice3) => {
        if(type === 1) return choice1
        if(type === 2) return choice2
        if(type === 3) return choice3
        return ''
    }
    
    if(isSmTablet && type === 2) return ;
    
    return (
        <>
        {tripeChoice( userArr , likedItems, cartItems).length ? 
            <BoxContainer 
                right={tripeChoice(isSmTablet ? 5 : 10, 5, 0)} 
                height={tripeChoice(24, 45.4, 46)} 
                width={tripeChoice(18,20.5,36.3)}
                padding={tripeChoice(1.6, 2.4, 2.4)}
                datatype="navBox" 
            >
                <BoxItems gap={tripeChoice(0,2,1)} height={tripeChoice('','','35rem')} datatype="navBox">
                    {tripeChoice(true, false, false) && <Typo type={TypoType.body_1} color='black' marginBottom='1'>{currentUser ? 'My Account' : 'Sign In'}</Typo> }  
                    {tripeChoice( currentUser ? userArr : [] , likedItems, cartItems).map((el,i) => <NavBoxItem key={i} props={el} type={type}/>)}
                </BoxItems>
                    {tripeChoice(false, false, true) &&
                    <>
                        <TotalContainer datatype="navBox">
                            <Typo type={TypoType.arialSize} color='black' size='1.6' weight='700' transform='capitalize'>Total</Typo>
                            <Typo type={TypoType.arialSize} color='black' size='1.6' weight='700' transform='capitalize'>${cartTotalPrice}</Typo>
                        </TotalContainer>
                        <BoxBtn type={BoxBtnType.radio} w='31.5rem' h='6rem' link='/checkout'>Checkout</BoxBtn>
                    </>    
                    }
                    { currentUser ? '' : tripeChoice(true, false, false) && <SignInContainer><BoxBtn type={BoxBtnType.radio} w='15rem' h='4rem' link='/account'  >Sign In</BoxBtn></SignInContainer> }
            </BoxContainer>
                :
            <BoxContainer
                right={tripeChoice(isSmTablet ? 5 : 10, 5, 0)}
                height='10'
                width='23'
                padding='2.5'
                datatype="navBox"
            >
                <Typo color='black' type={TypoType.body_1}>Your {tripeChoice('cart', 'favorite', 'cart')} is empty</Typo>
            </BoxContainer>    
        }
        </>        
    )
}

export default NavBox