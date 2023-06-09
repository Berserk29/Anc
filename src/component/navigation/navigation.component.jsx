import { Fragment, useState } from "react";
import { navLogoArray } from "./navigation.data";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import DropMenu from "../dropMenu/dropMenu.component";
import NavBox from "../navBox/navBox.component";

import { 
    NavbarContainer,
    NavIcon,
    HamContainer,
    HamburgerLine,
    HamBox,
    IconContainer,
    MenuBtn,
    CartNumber,
    CartNumberReverse,
 } from "./navigation.styled";

import AncLogo from "../ancLogo/ancLogo.component";
import { useContext } from "react";
import { LikedContext } from "../../context/liked.context";
import { CartContext } from "../../context/cart.context";

const Navigation = ({color = 'white', sticky = true}) => {
    const {navButton, setNavButton} = useContext(LikedContext)
    const {cartItemsCount} = useContext(CartContext)
    const [dropMenuOn, setDropMenuOn] = useState(false);
    const [dropMenuAni, setDropMenuAni] = useState(false);

    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)

    const hamHandler = () => {
        if(!dropMenuOn) {
            setDropMenuOn(true)
            setDropMenuAni(true)
        } 
        else {
            setDropMenuAni(false)
            setTimeout(() => {
                setDropMenuOn(false)
            }, 1000)
        } 
    }

    const IconHandler = (i) => {
        if(i === navButton) return setNavButton(0)
        setNavButton(i)
    }

    const CartNumberLogic = () => {
        const cartLimit = () => cartItemsCount > 99 ? 99 : cartItemsCount
        if(color === 'white' || dropMenuOn) return <CartNumber onClick={() => IconHandler(3)}>{cartLimit()}</CartNumber>
        return <CartNumberReverse onClick={() => IconHandler(3)}>{cartLimit()}</CartNumberReverse>
    }

    return (
        <Fragment>
            <NavbarContainer sticky={dropMenuOn ? true : sticky} >
                <HamContainer onClick={hamHandler}>
                    <HamBox animation={dropMenuAni}>
                        <HamburgerLine animation={dropMenuAni}  color={color === 'white' || dropMenuOn ? 'white' : 'black'} className="first-line"/>
                        <HamburgerLine animation={dropMenuAni}  color={color === 'white' || dropMenuOn ? 'white' : 'black'} className="last-line"/>
                    </HamBox>
                    { !isSmTablet && <MenuBtn color={color === 'white' || dropMenuOn ? 'white' : 'black'}>Menu</MenuBtn>}
                </HamContainer>
                <AncLogo haveLink={true} color={color} isDropMenuOn={dropMenuOn}/>
                <IconContainer datatype="navBox">
                    {navLogoArray.map((el,i) =>  isSmTablet && i === 0 ? '' : <NavIcon key={i} src={color === 'white' || dropMenuOn ? el.white : el.black} onClick={() => IconHandler(i + 1)} /> ) }
                    {cartItemsCount ? <CartNumberLogic/> : ''}
                    {navButton ? <NavBox type={navButton}/> : ''}
                </IconContainer>
            </NavbarContainer>
            {dropMenuOn ? <DropMenu isOpen={dropMenuAni}/> : ''}
        </Fragment>
        
    )
}

export default Navigation;