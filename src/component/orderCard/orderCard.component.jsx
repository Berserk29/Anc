import { useState } from "react";
import BoxBtn, {BoxBtnType} from "../boxBtn/boxBtn.component"
import Typo, { TypoType } from "../typo/typo.component";

import { Container, ImgOrder, FlexContainer } from "./orderCard.styled"

const OrderCard = ({props}) => {
    const {date, cartItems} = props;
    const { imageUrl } = cartItems[0];
    const [isViewOpen, setIsViewOpen] = useState(false)

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

    const totalItem = cartItems?.reduce((acc, curEL) => acc += curEL.quantity , 0)

    const clickHandle = () => {
        if(!isViewOpen) return  setIsViewOpen(true)
        else {
            return setIsViewOpen(false)
        }
    }

    return (
        <Container>
            <FlexContainer gap='1.6rem' >
                <ImgOrder src={imageUrl} />
                { !isViewOpen ?
                    <FlexContainer gap='3.2rem' direction='column'>
                        <Typo type={TypoType.arialSize} size='16px' color='black' transform='none' marginTop='.5'>{todayDate > deliverDate ? 'Delivered' : 'Delivery date:'} {time(deliverDate , false)}</Typo>
                        <div>
                            <Typo type={TypoType.body_5} color='var(--color-hover)'>{time(date)}</Typo>
                            <Typo type={TypoType.body_5} color='var(--color-hover)'>{totalItem} {totalItem === 1 ? 'Item' : 'Items'}</Typo>
                        </div>
                    </FlexContainer> 
                    :
                    <FlexContainer gap='0' direction='column'>
                        {cartItems.map((el,i) => <Typo type={TypoType.body_5} key={i} color='black'>&#x2022;{el.quantity}x {el.name} / Size: {el.size}</Typo>)}
                    </FlexContainer>
                }
            </FlexContainer>
            <div onClick={clickHandle}>
               <BoxBtn type={BoxBtnType.radio_active} typoType="body_5" w='15.2rem' h='3.4rem'>{!isViewOpen ? 'View order' : 'View date' }</BoxBtn>
            </div>
        </Container>
    )
}

export default OrderCard;