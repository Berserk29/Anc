import Typo, { TypoType } from "../typo/typo.component";
import { ProductContainer, ImgProduct, FlexContainer } from "./navBoxItem.styled";

const NavBoxItem = ({props, type}) => {
    const {name, imageUrl, price, quantity, size, totalPrice} = props

    const tripeChoice = (choice1, choice2, choice3) => {
        if(type === 1) return choice1
        if(type === 2) return choice2
        if(type === 3) return choice3
        return ''
    }

    return (
        <ProductContainer flex={tripeChoice('column','','')} >
            { tripeChoice(true, false, false) && <Typo type={TypoType.body_4} color='black' hover={true}>{name}</Typo> }
            { tripeChoice(false,true,true) && 
            <>
                <ImgProduct image={imageUrl}/> 
                <FlexContainer gap='3'>
                    <FlexContainer gap='.8'>
                        <Typo type={TypoType.arialSize} color='black' size='1.4' weight='700' transform='capitalize'>{name}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.4' weight='700'>${price}</Typo>
                    </FlexContainer>
                    <FlexContainer gap='.5'>
                        <Typo type={TypoType.arialSize} color='black' size='1.2' weight='400' transform='capitalize'>Quantity: {quantity}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.2' weight='400' transform='capitalize'>Size: {size}</Typo>
                        <Typo type={TypoType.arialSize} color='black' size='1.2' weight='700' transform='capitalize'>Total: ${totalPrice}</Typo>
                    </FlexContainer>
                </FlexContainer>

            </>
            }
        </ProductContainer>
    )
}

export default NavBoxItem