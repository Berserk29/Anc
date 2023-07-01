import { useContext, useEffect, useState} from "react";
import { phone } from 'phone';

import BoxMessage, { BoxMessageType } from "../../component/boxMessage/boxMessage.component";
import NavFooter from "../../component/navFooter/navFooter.component"
import Summary from "../../component/summary/summary.component";

import { 
    Section,
    ProductContainer,
    OrderContainer,
    ErrorContainer,
    PaymentSection
} from "./orderPage.styled";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import PaymentComplete from "../../component/paymentComplete/paymentComplete.component";
import FormAddress from "../../component/formAddress/formAddress.component";
import FormCard from "../../component/formCard/formCard.component";

import { addressHandler, cardHandler } from "../../helper/formFunction";

const OrderPage = () => {
    const {formAddress, formCard, currentUser, createPaymentDocument, paymentPageComplete, setPaymentPageComplete} = useContext(UserContext)
    const { cartItems, removeAllItems} = useContext(CartContext)
    const [errMessage, setErrMessage] = useState(false)

    useEffect(() => {
        setPaymentPageComplete(false)
    }, [])

    const handleFormSubmit = async () => {
        try{
            addressHandler(formAddress, phone)
            cardHandler(formCard)

        } catch(err) {
            setErrMessage(err.message)
            return;
        }

        setErrMessage(false)
        await createPaymentDocument(formAddress, formCard, cartItems, currentUser.email)

        removeAllItems()
    };

    return (
        <NavFooter color="white" sticky={false}>
                {paymentPageComplete ? 
                <PaymentSection>
                    <PaymentComplete /> 
                </PaymentSection>
                :
                <Section>
                    <ProductContainer>
                        <FormAddress orderPage={true}/>
                        <FormCard orderPage={true}/>
                    </ProductContainer>
                    <OrderContainer>
                        <Summary btnText={cartItems.length === 0 ? 'Return to the Shopping Page' : 'Payment'} taxSummary={true} onSubmit={() => handleFormSubmit()}/>
                        <ErrorContainer>
                            {errMessage && <BoxMessage type={BoxMessageType.err_white}>{errMessage}</BoxMessage> }
                        </ErrorContainer>
                    </OrderContainer>
                </Section>  
                }
        </NavFooter>
    )
}

export default OrderPage;