import { useEffect, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import mediaQuery from '../../helper/mediaQuery';

import Popup from '../popup/popup.component';
import Typo, {TypoType} from '../typo/typo.component';
import BoxBtn, { BoxBtnType } from '../boxBtn/boxBtn.component';
import { shareIcon, heartIcon, heartFull } from "./productOrder.data"

import { OrderContext } from '../../context/order.context';
import { LikedContext } from '../../context/liked.context';

import {    
    PriceContainer,
    IconContainer,
    IconCss,
    FlexBox,
    FlexBoxLine,
    FlexColumn,
    PriceBox,
} from './productOrder.styled'


const ProductOrder = ({product}) => {
    const {btnSizeHandler, btnSizeActiveNum, isProductDiscount, newPrice, totalPrice, isPopupOn, setOrderNumber} = useContext(OrderContext)
    const {likedBtnHandler , isLiked, openPageLiked} = useContext(LikedContext)

    const isTablet = useMediaQuery(mediaQuery.useTablet)
    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)

    // Init initial value
    useEffect(() => {
      btnSizeHandler(0)
      setOrderNumber(1)
    },[])

    useEffect(() => {
        isProductDiscount(product)
        openPageLiked(product)
    }, [ product, isProductDiscount, openPageLiked])

    return (
        <PriceContainer>
          {/* POPUP COMPONENT */}
          {isPopupOn ? <Popup props={product} /> : ''}
          {/* ICON AND PRODUCT NAME SECTION */}
        <IconContainer>
          <IconCss src={shareIcon} alt="share button" />
          <IconCss src={isLiked ? heartFull : heartIcon} alt="like button" onClick={() => likedBtnHandler(product)}/>
        </IconContainer>
        <Typo type={TypoType.headline_3}>{product?.name}</Typo>
        {/* PRE-ORDER AND PRODUCT TYPE SECTION */}
        <FlexBoxLine justify={ !product?.isNew && 'end'}>
          {product?.isNew && 
            <Typo type={TypoType.body_4} opacity='.4'>Pre-Order 10% Sale</Typo>
          }
          <Typo type={TypoType.body_3} opacity='.4'>{product?.type}</Typo>
        </FlexBoxLine>
        {/* PRICE SECTION */}
        <FlexBoxLine>
          <FlexColumn gap='.3'>
            {product?.isNew && 
              <PriceBox> 
                <Typo type={TypoType.arialSize} size={isTablet ? 1.625 : 1.3} opacity='.6'>$</Typo>
                <Typo type={TypoType.body_3_dash} opacity='.6'>{product?.price}</Typo>
              </PriceBox>
            }
            <PriceBox>
              <Typo type={TypoType.arialSize} size={isTablet ? 2.5 : 2}>$</Typo>
              <Typo type={TypoType.headline_4}>{newPrice}</Typo>
            </PriceBox>
          </FlexColumn>
          {product?.isNew && 
            <Typo type={TypoType.notoSans}>10%</Typo>
          }
          </FlexBoxLine>
          {/* COLOR SECTION */}
          <FlexBox justify='start' align='start' paddingBottom='0' gap='1.2'>
              <FlexColumn marginRight='3.1' gap='1.2'>
                  <Typo type={TypoType.body_5}>Color</Typo>
              </FlexColumn>
              <BoxBtn type={BoxBtnType.color} color={product?.color} w={isTablet && '5rem'} h={isTablet && '5rem'}/>
          </FlexBox>
          {/* SIZE SECTION */}
        { product?.size.length === 0 ? '' :
            <FlexBox justify='start' align='start' paddingBottom='4.6' gap='1.2'>
                <FlexColumn marginRight='3.1' gap='1.2'>
                    <Typo type={TypoType.body_5}>Size</Typo>
                    <Typo type={TypoType.body_5} opacity='.4'>Size Guide</Typo>
                </FlexColumn>
                {product?.size.map((el,i) => {
                if(btnSizeActiveNum === i) return <div key={i}><BoxBtn type={BoxBtnType.radio_active} w={isTablet && '5rem'} h={isTablet && '5rem' } >{el}</BoxBtn></div>
                return <div key={i} onClick={() => btnSizeHandler(i)}><BoxBtn type={BoxBtnType.radio} w={isTablet && '5rem'} h={isTablet && '5rem' } >{el}</BoxBtn></div>
            })}
            </FlexBox>
        }
        {/* QUANTITY SECTION */}
        <FlexBox>
            <Typo type={TypoType.body_2} userSelect='none'>Quantity</Typo>
            <BoxBtn type={BoxBtnType.sum} w={isTablet && '3.75rem'} h={isTablet && '3.75rem' } />
        </FlexBox>
        {/* ORDER REVIEW SECTION */}
        <FlexBoxLine paddingBottom='1.6'>
            <PriceBox gap='4'>
              <Typo type={TypoType.body_5}>Size :</Typo>
              <Typo type={TypoType.body_5} opacity='.4'>{product?.size[btnSizeActiveNum]}</Typo>
            </PriceBox>
            <Typo type={TypoType.body_4} >${newPrice} x</Typo>
        </FlexBoxLine>
        {/* TOTAL SECTION */}
        <FlexBox paddingTop='6'>
            <Typo type={TypoType.body_2} >Total</Typo>
            <PriceBox gap='4'>
                <Typo type={TypoType.arialSize} size='3'>$</Typo>
                <Typo type={TypoType.arialSize} size='4' weight='700'>{totalPrice}</Typo>
            </PriceBox>
        </FlexBox>
        {/* ADDING BTN SECTION */}
        <BoxBtn type={BoxBtnType.pay} product={product} w={isSmTablet && '100%'}/>
      </PriceContainer>
    )
}

export default ProductOrder;