import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import BoxBtn, { BoxBtnType } from "../boxBtn/boxBtn.component";
import Typo, { TypoType } from "../typo/typo.component";
import closeBtn from '../../assets/icon/x-close.jpg'

import { OrderContext } from "../../context/order.context";

import { ImgPopup, PopupContainer, FlexContainer, CloseBtn } from "./popup.styled";


const Popup = ({props}) => {
    const {imageUrl, name, size} = props
    const {orderNumber, btnSizeActiveNum, setIsPopupOn} = useContext(OrderContext)
    const navigate = useNavigate();

    const cartHandler = () => navigate('/checkout');

    // Timeout to takeout the popup
    useEffect(() => {
        let timeoutId = null;
    
        const resetTimeout = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setIsPopupOn(false);
          }, 6000);
        };
    
        resetTimeout(); // Call it initially
    
        return () => {
          clearTimeout(timeoutId); // Cleanup on component unmount
        };
      }, []);

    const closeHandler = () => setIsPopupOn(false)  

    return (
        <PopupContainer>
            <FlexContainer flex='column'>
                <FlexContainer>
                    <Typo type={TypoType.arialSize} size='1.6rem' transform='uppercase' weight='700' color='black'>Added to your cart</Typo>
                    <CloseBtn src={closeBtn} alt="close button" onClick={closeHandler}/>
                </FlexContainer>
                <FlexContainer align='flex-start'>
                    <ImgPopup src={imageUrl}/>
                    <FlexContainer flex='column' align='flex-start'>
                        <Typo type={TypoType.arialSize} size='1.4rem' transform='capitalize' weight='700' color='black'>{name}</Typo>
                        <FlexContainer gap='.8' justify='flex-start'>
                            <Typo type={TypoType.arialSize} size='1.2rem' transform='none' color='black'>Size:</Typo>
                            <Typo type={TypoType.arialSize} size='1.2rem' color='black'>{size[btnSizeActiveNum]}</Typo>
                        </FlexContainer>
                        <FlexContainer gap='.8' justify='flex-start'>
                            <Typo type={TypoType.arialSize} size='1.2rem' transform='none' color='black'>Quantity:</Typo>
                            <Typo type={TypoType.arialSize} size='1.2rem' color='black'>{orderNumber}</Typo>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <div onClick={cartHandler}>
                    <BoxBtn type={BoxBtnType.radio_active} w='31.5rem' h='4.8rem' typoType='body_1' >See Shopping Cart</BoxBtn>
                </div>
            </FlexContainer>
        </PopupContainer>
    )
}

export default Popup;