import BoxBtn, {BoxBtnType} from "../boxBtn/boxBtn.component"
import Typo, { TypoType } from "../typo/typo.component";

import { Container, ImgOrder, FlexContainer } from "./orderCard.styled"

const OrderCard = ({props}) => {
    const {date, cartItems} = props;
    const { imageUrl } = cartItems[0];

    const deliverDate = date + (1000 * 60 * 60 * 24 * 7);
    const todayDate = new Date().getTime()

    const time = (date, isWithYear = true) => {
        const findDate = new Date(date)
        const day = findDate.getDate();
        const month = findDate.toLocaleString('en-GB', { month: 'long' });
        const year = findDate.getFullYear();
        if(isWithYear) return [day, month, year].join(' ')
        if(!isWithYear) return [day, month].join(' ')
    }

    const totalItem = cartItems.reduce((acc, curEL) => acc += curEL.quantity , 0)

    return (
        <Container>
            <FlexContainer gap='1.6rem'>
                <ImgOrder src={imageUrl} />
                <FlexContainer gap='3.2rem' direction='column'>
                    <Typo type={TypoType.arialSize} size='16px' color='black' transform='none' marginTop='.5'>{todayDate > deliverDate ? 'Delivered' : 'Delivery date:'} {time(deliverDate , false)}</Typo>
                    <div>
                        <Typo type={TypoType.body_5} color='var(--color-hover)'>{time(date)}</Typo>
                        <Typo type={TypoType.body_5} color='var(--color-hover)'>{totalItem} {totalItem === 1 ? 'Item' : 'Items'}</Typo>
                    </div>
                </FlexContainer>
            </FlexContainer>
            <div onClick={() => console.log(date)}>
               <BoxBtn type={BoxBtnType.radio_active} typoType="body_5" w='15.2rem' h='3.4rem'>View order</BoxBtn>
            </div>
        </Container>
    )
}

export default OrderCard;