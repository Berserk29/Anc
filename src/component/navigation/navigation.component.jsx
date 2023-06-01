import { Fragment, useState } from "react";
import { hamLogo, navLogoArray } from "./navigation.data";

import DropMenu from "../dropMenu/dropMenu.component";

import { 
    NavbarContainer,
    NavIcon,
    HamIcon,
    HamContainer,
    IconContainer,
    MenuBtn
 } from "./navigation.styled";

import AncLogo from "../ancLogo/ancLogo.component";

// TODO DropMenu after clicked Hamburger
// TODO Created the different stuff after clicking on the navLogo

const Navigation = ({color = 'white', sticky = true}) => {
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

    return (
        <Fragment>
            <NavbarContainer sticky={sticky}>
                <HamContainer onClick={hamHandler}>
                    <HamIcon src={color === 'white' || dropMenuOn ? hamLogo.white : hamLogo.black} alt="Ham Icon" />
                    {/* Create the Menu button by styled */}
                    <MenuBtn color={color === 'white' || dropMenuOn ? 'white' : 'black'}>Menu</MenuBtn>
                </HamContainer>
                <AncLogo haveLink={true} color={color} isDropMenuOn={dropMenuOn}/>
                <IconContainer>
                    {navLogoArray.map((el,i) => <NavIcon key={i} src={color === 'white' || dropMenuOn ? el.white : el.black}/>)}
                </IconContainer>
            </NavbarContainer>
            {dropMenuOn && <DropMenu isOpen={dropMenuAni}/>}
        </Fragment>
        
    )
}

export default Navigation;