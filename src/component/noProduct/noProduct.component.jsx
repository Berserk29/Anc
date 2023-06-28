import { useContext } from "react";
import {UserContext} from "../../context/user.context";
import Typo, { TypoType } from "../typo/typo.component";
import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"

import { Container, ItemsContainer } from "./noProduct.styled";

const NoProduct = ({type}) => {
    const { currentUser } = useContext(UserContext)

    return (
        <Container>
            <ItemsContainer>
                <Typo type={TypoType.arialSize} transform='none' size='1.8rem' color='black' >You have no {type}. Check out our new products on our shop page if you are interested. Have a nice day, {currentUser.displayName}!</Typo>
                <BoxBtn type={BoxBtnType.radio_active} w='15rem' link={'/shop'}>Shop</BoxBtn>
            </ItemsContainer>
        </Container>
    )
}

export default NoProduct;