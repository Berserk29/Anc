import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Typo, {TypoType} from "../typo/typo.component";

import { RadioBtn, RadioBtnActive, FlexContainer, Minus, Plus, ColorSquare } from "./boxBtn.styled";
import { OrderContext } from "../../context/order.context";
import { CartContext } from "../../context/cart.context";
import { LikedContext } from "../../context/liked.context";

export const BoxBtnType = {
    radio: 'radio',
    radio_active: 'radio_active',
    sum: 'sum',
    pay: 'pay',
    color: 'color', 
}

const BoxBtn = ({type, children, product, color, w, h, link = false}) => {
    const {orderNumber, addOrderNumber, subtractOrderNumber, addProductOrder} = useContext(OrderContext)
    const {addItemToCart} = useContext(CartContext)
    const { setNavButton } = useContext(LikedContext)
    const navigate = useNavigate()

    const HandlerAddLink = (boolean) => {
        if(boolean === false) return addItemToCart(addProductOrder(product))
        else {
            addItemToCart(addProductOrder(product))
            return navigate('/account');
        }
    }

    const navigateLink = (link) => {
        if(!link) return;
        setNavButton(0)
        navigate(link) 
    }

    const BtnChoice = () => {

        if(type === 'radio') return (
            <RadioBtn w={w ? w : 4} h={h ? h : 4} onClick={() => navigateLink(link)}>
                <Typo type={TypoType.body_2}>{children}</Typo>
            </RadioBtn>
        )
        if(type === 'radio_active') return (
            <RadioBtnActive w={w ? w : 4} h={h ? h : 4} onClick={() => navigateLink(link)}>
                <Typo type={TypoType.body_2} color='black'>{children}</Typo>
            </RadioBtnActive>
        )
        if(type === 'color') return <ColorSquare color={color}/>

        if(type === 'sum') return (
            <FlexContainer>
                <RadioBtn w="3" h="3"  onClick={subtractOrderNumber}><Minus/></RadioBtn>
                <RadioBtn w="3" h="3"><Typo type={TypoType.body_3} userSelect='none'>{orderNumber}</Typo></RadioBtn>
                <RadioBtn w="3" h="3" onClick={addOrderNumber}><Plus/></RadioBtn>
            </FlexContainer>
        )
        if(type === 'pay') return (
            <FlexContainer justify='space-between'>
                <RadioBtn w="16.7" h="5.6" onClick={() => HandlerAddLink(false)} ><Typo type={TypoType.body_1}>Add to cart</Typo></RadioBtn>
                <RadioBtnActive w="16.7" h="5.6" onClick={() => HandlerAddLink(true)} ><Typo type={TypoType.body_1} color='black'>Buy Now</Typo></RadioBtnActive>
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