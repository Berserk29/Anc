import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { 
    NavbarContainer,
 } from "./navigation.styled";

const Navigation = () => {
    return (
        <Fragment>
            <NavbarContainer>
                <h1>Navigation</h1>
            </NavbarContainer>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;