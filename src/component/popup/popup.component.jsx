import { useContext, useEffect } from "react";
import { IconImg, ImgPopup, PopupContainer, TextContainer } from "./popup.styled";
import { OrderContext } from "../../context/order.context";
import Typo, { TypoType } from "../typo/typo.component";

import checkIcon from '../../assets/icon/checked.png'

// TODO TESTING THE DESIGN WILL CHANGE...

const Popup = ({props}) => {
    const {imageUrl, name} = props
    const {setIsPopupOn} = useContext(OrderContext)

    useEffect(() => {
        setTimeout(() => {
            setIsPopupOn(false)
        }, [3500])
    },[setIsPopupOn])


    return (
        <PopupContainer>
            <ImgPopup src={imageUrl}/>
            <TextContainer flex='column' gap='2'>
                <TextContainer gap='1'>
                    <IconImg src={checkIcon}/>
                    <Typo type={TypoType.headline_5} color='black'>Added to Cart</Typo>
                </TextContainer>
                <TextContainer gap='.5'>
                    <Typo type={TypoType.arialSize} size='1.3' weight='700' transform='capitalize' color='black'>Name:</Typo>
                    <Typo type={TypoType.body_5} color='black'>{name}</Typo>
                </TextContainer>
            </TextContainer>
        </PopupContainer>
    )
}

export default Popup;