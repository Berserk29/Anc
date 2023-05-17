import { Fragment } from "react";
import { Outlet} from "react-router-dom";
import { 
    NavbarContainer,
    NavIcon,
    HamIcon,
    HamContainer,
    IconContainer,
 } from "./navigation.styled";

import hamIcon from '../../assets/icon/hamburger.png' 
import userIcon from '../../assets/icon/user.png' 
import heartIcon from '../../assets/icon/heart.png' 
import shopIcon from '../../assets/icon/shopping-bag.png'

import Heading, { HeadingType } from "../heading/heading.component";
import AncLogo from "../ancLogo/ancLogo.component";

// TODO DropMenu after clicked Hamburger
// TODO Created the different stuff after clicking on the navLogo

const Navigation = () => {

    return (
        <Fragment>
            <NavbarContainer>
                <HamContainer>
                    <HamIcon src={hamIcon} alt="Ham Icon" />
                    <Heading size='1.6' type={HeadingType.subArial} title='Menu' marginLeft='1.4'/>
                </HamContainer>
                <AncLogo haveLink={true} />
                <IconContainer>
                    <NavIcon src={userIcon} alt="User Icon" />
                    <NavIcon src={heartIcon} alt="Heart Icon" />
                    <NavIcon src={shopIcon} alt="Shop Icon" />
                </IconContainer>
            </NavbarContainer>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;