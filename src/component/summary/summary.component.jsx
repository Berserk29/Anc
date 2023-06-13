import { useContext } from "react"
import { UserContext } from "../../context/user.context"
import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"
import Typo, { TypoType } from "../typo/typo.component"

import { Container, DetailContainer, TotalContainer, Line } from "./summary.styled"
import { CartContext } from "../../context/cart.context"

const Summary = ({btnText, taxSummary}) => {
    const {currentUser} = useContext(UserContext)
    const {cartItemsCount, cartTotalPrice, shippingCost, totalBeforeTax} = useContext(CartContext)

    return (
        <Container>
            <Typo type={TypoType.arialSize} size='2.3' weight='700' transform='none' color='black' >Order summary</Typo>
            <DetailContainer>
                <Line>
                    <Typo type={TypoType.body_4} color='black' >Item ({cartItemsCount})</Typo>
                    <Typo type={TypoType.body_4} color='black' >${cartTotalPrice.toFixed(2)}</Typo>
                </Line>
                <Line>
                    <Typo type={TypoType.body_4} color='black' >Shipping & handling</Typo>
                    <Typo type={TypoType.body_4} color='black' >${shippingCost.toFixed(2)}</Typo>
                </Line>
                {   taxSummary ? 
                    <>
                    <Line>
                        <Typo type={TypoType.body_4} color='black' >Total before tax</Typo>
                        <Typo type={TypoType.body_4} color='black' >$ (shipping + price)</Typo>
                    </Line>
                    <Line>
                        <Typo type={TypoType.body_4} color='black' >Estimated GST/HST</Typo>
                        <Typo type={TypoType.body_4} color='black' >$ (tax)</Typo>
                    </Line>
                    <Line>
                        <Typo type={TypoType.body_4} color='black' >Estimated PST/RST/QST:</Typo>
                        <Typo type={TypoType.body_4} color='black' >$ (tax)</Typo>
                    </Line>
                    </> : ''                    
                }
            </DetailContainer>
            <TotalContainer>
                <Typo type={TypoType.arialSize} size={taxSummary ? 2.3 : 1.6} weight='700' transform='none' color='black' >{taxSummary ? 'Total' : 'Total before tax'}</Typo>
                <Typo type={TypoType.headline_4} color='black' >${taxSummary ? '999$' : totalBeforeTax.toFixed(2)}</Typo>
            </TotalContainer>
            <BoxBtn type={BoxBtnType.radio} w='100%' h='4.8rem' typoType="body_1">{currentUser ? btnText : 'Sign In'}</BoxBtn>
        </Container>
    )
}

export default Summary;