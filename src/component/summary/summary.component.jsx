import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../context/user.context"
import { CartContext } from "../../context/cart.context"

import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"
import Typo, { TypoType } from "../typo/typo.component"

import { Container, DetailContainer, TotalContainer, Line } from "./summary.styled"

const Summary = ({btnText, taxSummary, onSubmit}) => {
    const {currentUser} = useContext(UserContext)
    const {cartItemsCount, cartTotalPrice, shippingCost, totalBeforeTax, federalTax, provincialTax , totalAfterTax, cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const btnHandler = () => {
        if(cartItems.length === 0) return navigate('/shop')
        if(taxSummary) return onSubmit()
        else {
            navigate('/checkout/order')
        }    
        
    }

    return (
        <Container>
            <Typo type={TypoType.arialSize} size='2.3rem' weight='700' transform='none' color='black' >Order summary</Typo>
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
                        <Typo type={TypoType.body_4} color='black' >${totalBeforeTax.toFixed(2)}</Typo>
                    </Line>
                    <Line>
                        <Typo type={TypoType.body_4} color='black' >Estimated GST/HST</Typo>
                        <Typo type={TypoType.body_4} color='black' >{federalTax !== 0 ? `$${federalTax.toFixed(2)}` : "-----"}</Typo>
                    </Line>
                    {  !provincialTax ? '' 
                        :
                        <Line>
                            <Typo type={TypoType.body_4} color='black' >Estimated PST/RST/QST:</Typo>
                            <Typo type={TypoType.body_4} color='black' >${provincialTax.toFixed(2)}</Typo>
                        </Line>
                    }
                    </> : ''                    
                }
            </DetailContainer>
            <TotalContainer>
                <Typo type={TypoType.arialSize} size={taxSummary ? '2.3rem' : '1.6rem'} weight='700' transform='none' color='black' >{taxSummary ? 'Total' : 'Total before tax'}</Typo>
                <Typo type={TypoType.headline_4} color='black' >{taxSummary ?  federalTax !== 0 ? `$${totalAfterTax.toFixed(2)}` : '-----' : `$${totalBeforeTax.toFixed(2)}`}</Typo>
            </TotalContainer>
            <div onClick={btnHandler} >
                <BoxBtn type={BoxBtnType.radio} w='100%' h='48px' typoType="arialSize" size='16px' weight='700' transform='capitalize' >{currentUser ? btnText : 'Sign In'}</BoxBtn>
            </div>
        </Container>
    )
}

export default Summary;