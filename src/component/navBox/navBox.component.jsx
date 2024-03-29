import { useMediaQuery } from "react-responsive"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import mediaQuery from "../../helper/mediaQuery"

import { CartContext } from "../../context/cart.context"
import { LikedContext } from "../../context/liked.context"
import { UserContext } from "../../context/user.context"

import NavBoxItem from "../navBoxItem/navBoxItem.component"
import Typo, { TypoType } from "../typo/typo.component"
import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"

import { BoxContainer, BoxItems, TotalContainer, SignInContainer } from "./navBox.styled"
import { userArr } from "./navBox.data"

const NavBox = ({type}) => {
    const { currentUser } = useContext(UserContext)
    const { cartItems } = useContext(CartContext)
    const { likedItems } = useContext(LikedContext)

    const navigate = useNavigate()
    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)
    const isMobile = useMediaQuery(mediaQuery.useMobile)

    const tripeChoice = (choice1, choice2, choice3) => {
        if(type === 1) return choice1
        if(type === 2) return choice2
        if(type === 3) return choice3
        return ''
    }
    
    const clickHandler = () => { 
        if(!currentUser) return;
        navigate('/account')
    }

    if(isSmTablet && type === 2) return ;
    

    return (
        <>
        {tripeChoice( userArr , likedItems, cartItems).length ? 
            <BoxContainer 
                right={tripeChoice(isSmTablet ? 5 : 10, 5, 0)} 
                height={tripeChoice(24, 45.4, 46)} 
                width={tripeChoice(18, 20.5, isMobile ? 32 : 36.3)}
                padding={tripeChoice(1.6, 2.4, 2.4)}
                datatype="navBox" 
            >
                <BoxItems gap={tripeChoice(0,2,1)} height={tripeChoice('','','35rem')} datatype="navBox">
                    {tripeChoice(true, false, false) &&  <div onClick={clickHandler}><Typo type={TypoType.body_1} color='black' marginBottom='1' hover={currentUser ? true : false}>{currentUser ? 'My Account' : 'Sign In'}</Typo></div> }  
                    {tripeChoice( currentUser ? userArr : [] , likedItems, cartItems).map((el,i) => <NavBoxItem key={i} props={el} type={type}/>)}
                </BoxItems>
                    {tripeChoice(false, false, true) &&
                    <>
                        <TotalContainer datatype="navBox">
                            <BoxBtn type={BoxBtnType.radio} w='31.5rem' h='6rem' typoType="arialSize" size='16px' weight='700' transform='capitalize' link='/checkout'>See Shopping Cart</BoxBtn>
                        </TotalContainer>
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