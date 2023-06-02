import { Fragment, useState } from "react";
import { hamLogo, navLogoArray } from "./navigation.data";

import DropMenu from "../dropMenu/dropMenu.component";
import NavBox from "../navBox/navBox.component";

import { 
    NavbarContainer,
    NavIcon,
    HamIcon,
    HamContainer,
    IconContainer,
    MenuBtn
 } from "./navigation.styled";

import AncLogo from "../ancLogo/ancLogo.component";

// TODO ANIMATION OF THE HAMBURGER AFTER DROPMENUON ( = -> x )
// TODO Created the different stuff after clicking on the navLogo

const Navigation = ({color = 'white', sticky = true}) => {
    const [navButton, setNavButton] = useState(0)
    const [dropMenuOn, setDropMenuOn] = useState(false);
    const [dropMenuAni, setDropMenuAni] = useState(false)

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

    return (
        <Fragment>
            <NavbarContainer sticky={dropMenuOn ? true : sticky} >
                <HamContainer onClick={hamHandler}>
                    <HamIcon src={color === 'white' || dropMenuOn ? hamLogo.white : hamLogo.black} alt="Ham Icon" />
                    <MenuBtn color={color === 'white' || dropMenuOn ? 'white' : 'black'}>Menu</MenuBtn>
                </HamContainer>
                <AncLogo haveLink={true} color={color} isDropMenuOn={dropMenuOn}/>
                <IconContainer>
                    {navLogoArray.map((el,i) => <NavIcon key={i} src={color === 'white' || dropMenuOn ? el.white : el.black} onClick={() => IconHandler(i + 1)}/>)}
                    {navButton ? <NavBox type={navButton}/> : ''}
                </IconContainer>
            </NavbarContainer>
            {dropMenuOn ? <DropMenu isOpen={dropMenuAni}/> : ''}
        </Fragment>
        
    )
}

export default Navigation;