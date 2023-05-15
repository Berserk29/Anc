import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { 
    NavbarContainer,
 } from "./navigation.styled";

const Navigation = () => {
    return (
        <Fragment>
            <NavbarContainer>
                <h1>HamMenu</h1>
                <h1>Logo</h1>
                <div>
                    <h1>SignIn</h1>
                    <h1>Cart</h1>
                </div>
            </NavbarContainer>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation;