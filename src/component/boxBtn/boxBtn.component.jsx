import { Fragment, useContext } from "react";
import Typo, {TypoType} from "../typo/typo.component";

import { RadioBtn, RadioBtnActive, FlexContainer, Minus, Plus } from "./boxBtn.styled";
import { CartContext } from "../../context/cart.context";
import { OrderContext } from "../../context/order.context";

export const BoxBtnType = {
    radio: 'radio',
    radio_active: 'radio_active',
    sum: 'sum',
    pay: 'pay' 
}

const BoxBtn = ({type, children, product}) => {
    const {orderNumber, addOrderNumber, subtractOrderNumber} = useContext(OrderContext)
    const {addItemToCart} = useContext(CartContext)

    const BtnChoice = () => {
        if(type === 'radio') return <RadioBtn w="4" h="4"><Typo type={TypoType.body_2}>{children}</Typo></RadioBtn>
        if(type === 'radio_active') return <RadioBtnActive w="4" h="4"><Typo type={TypoType.body_2} color='black'>{children}</Typo></RadioBtnActive>
        if(type === 'sum') return (
            <FlexContainer>
                <RadioBtn w="3" h="3"  onClick={subtractOrderNumber}><Minus/></RadioBtn>
                <RadioBtn w="3" h="3"><Typo type={TypoType.body_3} userSelect='none'>{orderNumber}</Typo></RadioBtn>
                <RadioBtn w="3" h="3" onClick={addOrderNumber}><Plus/></RadioBtn>
            </FlexContainer>
        )
        if(type === 'pay') return (
            <FlexContainer justify='space-between'>
                <RadioBtn w="16.7" h="5.6" onClick={() => addItemToCart(product)}><Typo type={TypoType.body_1}>Add to cart</Typo></RadioBtn>
                <RadioBtnActive w="16.7" h="5.6"><Typo type={TypoType.body_1} color='black'>Buy Now</Typo></RadioBtnActive>
            </FlexContainer>
        )    
        
    }

    return (
        <Fragment>
            <BtnChoice />
        </Fragment>
    )
}

export default BoxBtn;