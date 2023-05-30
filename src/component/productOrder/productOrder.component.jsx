import { useEffect, useContext, useState } from 'react';

import Typo, {TypoType} from '../typo/typo.component';
import { shareIcon, heartIcon, heartFull } from "./productOrder.data"
import BoxBtn, { BoxBtnType } from '../boxBtn/boxBtn.component';

import { LikedContext } from '../../context/liked.context';
import { CartContext } from '../../context/cart.context';

import {    
    PriceContainer,
    IconContainer,
    IconCss,
    FlexBox,
    FlexBoxLine,
    FlexColumn,
    PriceBox,
} from './productOrder.styled'
import { OrderContext } from '../../context/order.context';


const ProductOrder = ({product}) => {
    const {orderNumber} = useContext(OrderContext)
    const {isProductLiked , isLiked, openPageLiked} = useContext(LikedContext)
    const [btnSizeActive, setBtnSizeActive] = useState(0)
    const heartHandler = () => isProductLiked(product);
    const newPrice = (product?.price * 90 / 100).toFixed(2);
    const totalPrice = (newPrice * orderNumber).toFixed(2);
    
    const btnHandler = (i) => setBtnSizeActive(i)

    // TODO THIS WILL BE CREATE IN THE ORDERCONTEXT AND SEND AFTER TO THE CART CONTEXT
    const orderProduct = {
        ...product,
        size: product?.size[btnSizeActive] || [],
        quantity: orderNumber,
        price: newPrice,
        totalPrice : totalPrice,
    }

    useEffect(() => {
      openPageLiked(product)
    }, [openPageLiked, product])

    return (
        <PriceContainer>
        <IconContainer>
          <IconCss src={shareIcon} alt="share button" />
          <IconCss src={isLiked ? heartFull : heartIcon} alt="like button" onClick={heartHandler}/>
        </IconContainer>
        <Typo type={TypoType.headline_3}>{product?.name}</Typo>
        <FlexBoxLine>
          <Typo type={TypoType.body_4} opacity='.4'>Pre-Order 10% Sale</Typo>
          <Typo type={TypoType.body_3} opacity='.4'>{product?.type}</Typo>
        </FlexBoxLine>
        <FlexBoxLine>
          <FlexColumn gap='.3'>
            <PriceBox> 
              <Typo type={TypoType.headline_5} opacity='.6'>$</Typo>
              <Typo type={TypoType.body_3_dash} opacity='.6'>{product?.price}</Typo>
            </PriceBox>
            <PriceBox>
              <Typo type={TypoType.headline_5}>$</Typo>
              <Typo type={TypoType.headline_4}>{newPrice}</Typo>
            </PriceBox>
          </FlexColumn>
          <Typo type={TypoType.notoSans}>10%</Typo>
        </FlexBoxLine>
        { product?.size.length === 0 ? '' :
            <FlexBox justify='start' align='start' paddingBottom='4.6' gap='1.2'>
                <FlexColumn marginRight='3.1' gap='1.2'>
                    <Typo type={TypoType.body_5}>Size</Typo>
                    <Typo type={TypoType.body_5} opacity='.4'>Size Guide</Typo>
                </FlexColumn>
                {product?.size.map((el,i) => {
                if(btnSizeActive === i) return <div key={i} onClick={() => btnHandler(i)}><BoxBtn type={BoxBtnType.radio_active}>{el}</BoxBtn></div>
                return <div key={i} onClick={() => btnHandler(i)}><BoxBtn type={BoxBtnType.radio}>{el}</BoxBtn></div>
            })}
            </FlexBox>
        }
        <FlexBox>
            <Typo type={TypoType.body_2} userSelect='none'>{product?.name}</Typo>
            <BoxBtn type={BoxBtnType.sum}>{totalPrice}</BoxBtn>
        </FlexBox>
        <FlexBoxLine paddingBottom='1.6' justify='end'>
            <Typo type={TypoType.body_4} >${newPrice} x</Typo>
        </FlexBoxLine>
        <FlexBox paddingTop='6'>
            <Typo type={TypoType.body_2} >Total</Typo>
            <PriceBox gap='4'>
                <Typo type={TypoType.headline_3}>$</Typo>
                <Typo type={TypoType.headline_1}>{totalPrice}</Typo>
            </PriceBox>
        </FlexBox>
        <BoxBtn type={BoxBtnType.pay} product={orderProduct}/>
      </PriceContainer>
    )
}

export default ProductOrder;