import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component";
import Typo, {TypoType} from "../typo/typo.component"
import { Container, ProductContainer, ImgCss, DetailContainer, FlexContainer } from "./checkoutProduct.styled";

import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

const CheckoutProduct = ({props}) => {
const {name, price, quantity, imageUrl, size} = props;

const isTablet = useMediaQuery(mediaQuery.useTablet)

    return (
        <Container>
            <ProductContainer>
                <ImgCss src={imageUrl} alt="product image" />
                <DetailContainer>
                    <Typo type={TypoType.arialSize} size={!isTablet ? 1.6 : 2} transform='capitalize' color='black'>{name}</Typo>
                    <Typo type={TypoType.body_5} color='var(--color-hover)'>Size: {size}</Typo>
                    <BoxBtn type={BoxBtnType.radio_checkout} w='6.5rem' h='2.5rem' product={props}>Delete</BoxBtn>
                </DetailContainer>
            </ProductContainer>
            <FlexContainer>
                <BoxBtn type={BoxBtnType.sum_checkout} product={props}>{quantity}</BoxBtn>
            </FlexContainer>
            <FlexContainer>
                <Typo type={TypoType.body_2} color='black'>${price}</Typo>
            </FlexContainer>
        </Container>
    )
}

export default CheckoutProduct;