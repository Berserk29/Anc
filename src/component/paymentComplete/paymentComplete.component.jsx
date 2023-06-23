import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component"
import Typo, { TypoType } from "../typo/typo.component"
import { Section, TextContainer } from "./paymentComplete.styled"
import { useMediaQuery } from "react-responsive"
import mediaQuery from "../../helper/mediaQuery"

const PaymentComplete = () => {
    const isMobile = useMediaQuery(mediaQuery.useMobile)

    return (
        <Section>
            <TextContainer>
                <Typo type={TypoType.arialSize} size='3.6rem' weight='700' color='black'>Thank you</Typo>
                <Typo type={TypoType.body_4} color='black'>We are getting started on your order right away, and you will receive an order confirmation email shortly to user. In the meantime, explore the latest fashion and get inspired by new trends, just head over to ANC Lookbook</Typo>
            </TextContainer>
            <BoxBtn type={BoxBtnType.radio} link='/account' w={isMobile ? '100%' : '31.5rem'} maxWidth='31.5rem' h='5.2rem'  typoType="body_1">View Order Confirmation</BoxBtn>
        </Section>
    )
}
// 31.5rem
export default PaymentComplete;