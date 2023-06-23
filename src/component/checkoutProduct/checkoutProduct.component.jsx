import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component";
import Typo, {TypoType} from "../typo/typo.component"
import { Container, ProductContainer, ImgCss, DetailContainer, FlexContainer } from "./checkoutProduct.styled";

import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

const CheckoutProduct = ({props, title = false}) => {
const {name, price, quantity, imageUrl, size} = props;

const isSmallTablet = useMediaQuery(mediaQuery.useSmTablet)
const isMobile = useMediaQuery(mediaQuery.useMobile)


    return (
        <Container>
        { !title ?
            <>
                <ProductContainer>
                    <ImgCss src={imageUrl} alt="product image" />
                    <DetailContainer>
                        <Typo type={TypoType.arialSize} size={isMobile ? '14px' : '16px'} transform='capitalize' color='black'>{name}</Typo>
                        <Typo type={TypoType.body_5} color='var(--color-hover)'>Size: {size}</Typo>
                        <BoxBtn type={BoxBtnType.radio_checkout} w='6.5rem' h='2.5rem' product={props}>Delete</BoxBtn>
                    </DetailContainer>
                </ProductContainer>
                {
                    !isSmallTablet ?
                    <>
                    <FlexContainer>
                        <BoxBtn type={BoxBtnType.sum_checkout} product={props}>{quantity}</BoxBtn>
                    </FlexContainer>
                    <FlexContainer>
                        <Typo type={TypoType.body_2} color='black'>${price.toFixed(2)}</Typo>
                    </FlexContainer>
                    </> 
                    :
                    <FlexContainer>
                        <BoxBtn type={BoxBtnType.sum_checkout} product={props}>{quantity}</BoxBtn>
                        <Typo type={TypoType.body_2} color='black'>${price.toFixed(2)}</Typo>
                    </FlexContainer>
                }
            </>
            : 
            <>
                <ProductContainer>
                    <Typo type={TypoType.arialSize} size='1.6rem' transform='capitalize' color='black'>{title[0]}</Typo>
                </ProductContainer>
                {
                    !isSmallTablet ?
                    <>
                    <FlexContainer>
                        <Typo type={TypoType.arialSize} size='1.6rem' transform='capitalize' color='black'>{title[1]}</Typo>
                    </FlexContainer>
                    <FlexContainer>
                        <Typo type={TypoType.arialSize} size='1.6rem' transform='capitalize' color='black'>{title[2]}</Typo>
                    </FlexContainer>
                    </> 
                    :
                    <FlexContainer>
                        <Typo type={TypoType.arialSize} size='1.6rem' transform='capitalize' color='black'>{title[1]} / {title[2]}</Typo>
                    </FlexContainer>
                }
            </>

        }
        </Container>
    )
}

export default CheckoutProduct;