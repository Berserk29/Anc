import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Typo, {TypoType} from "../typo/typo.component";

import { 
    RadioBtn, 
    RadioBtnActive, 
    FlexContainer, 
    Minus, 
    Plus, 
    ColorSquare, 
    SumBtn,
    SumBtnWhite,
    MinusReverse,
    PlusReverse,
    RadioHover
} from "./boxBtn.styled";

import { OrderContext } from "../../context/order.context";
import { CartContext } from "../../context/cart.context";
import { LikedContext } from "../../context/liked.context";

export const BoxBtnType = {
    radio: 'radio',
    radio_active: 'radio_active',
    radio_checkout: 'radio_checkout',
    sum: 'sum',
    sum_checkout: 'sum_checkout',
    pay: 'pay',
    color: 'color', 
    sign: 'sign'
}

const BoxBtn = ({type, children, product, color, w, h, link = false, typoType = 'body_2', maxWidth}) => {
    const {orderNumber, addOrderNumber, subtractOrderNumber, addProductOrder, setIsPopupOn} = useContext(OrderContext)
    const {addItemToCart, removeItemToCart, subtractItemToCart} = useContext(CartContext)
    const { setNavButton } = useContext(LikedContext)

    const navigate = useNavigate()

    const HandlerAddLink = (boolean) => {
        if(boolean === false) {
            setIsPopupOn(true)
            return addItemToCart(addProductOrder(product), orderNumber)
        }
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
            <RadioBtn w={w} h={h} maxWidth={maxWidth} onClick={() => navigateLink(link)}>
                <Typo type={TypoType[typoType]}>{children}</Typo>
            </RadioBtn>
        )
        if(type === 'radio_active') return (
            <RadioBtnActive w={w} h={h} maxWidth={maxWidth} onClick={() => navigateLink(link)}>
                <Typo type={TypoType[typoType]} color='black'>{children}</Typo>
            </RadioBtnActive>
        )
        if(type === 'radio_checkout') return (
            <RadioHover w={w} h={h} onClick={() => removeItemToCart(product)}>
                <Typo type={TypoType[typoType]} color='var(--color-hover)'>{children}</Typo>
            </RadioHover>
        )
        if(type === 'color') return <ColorSquare w={w} h={h} color={color}/>

        if(type === 'sum') return (
            <FlexContainer>
                <SumBtn w={w} h={h}  onClick={subtractOrderNumber}><Minus/></SumBtn>
                <SumBtn w={w} h={h}><Typo type={TypoType.body_3} userSelect='none'>{orderNumber}</Typo></SumBtn>
                <SumBtn w={w} h={h} onClick={addOrderNumber}><Plus/></SumBtn>
            </FlexContainer>
        )
        if(type === 'sum_checkout') return (
            <FlexContainer>
                <SumBtnWhite w={w} h={h}  onClick={() => subtractItemToCart(product)}><MinusReverse/></SumBtnWhite>
                <SumBtnWhite w={w} h={h}><Typo type={TypoType.body_3} userSelect='none' color='black' >{children}</Typo></SumBtnWhite>
                <SumBtnWhite w={w} h={h} onClick={() => addItemToCart(product, 1)}><PlusReverse/></SumBtnWhite>
            </FlexContainer>
        )
        if(type === 'pay') return (
            <FlexContainer justify='center' gap='1'>
                <RadioBtn  w={w ? w : '16.7rem'} h={h ? h : '5.6rem'} onClick={() => HandlerAddLink(false)} ><Typo type={TypoType.body_1}>Add to cart</Typo></RadioBtn>
                <RadioBtnActive w={w ? w : '16.7rem'} h={h ? h : '5.6rem'} onClick={() => HandlerAddLink(true)} ><Typo type={TypoType.body_1} color='black'>Buy Now</Typo></RadioBtnActive>
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