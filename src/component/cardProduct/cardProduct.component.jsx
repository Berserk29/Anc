import { Fragment} from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, ImgContainer, CardImg, CardHover, NewContainer, FlexContainer} from "./cardProduct.styled"
import Typo, {TypoType} from "../typo/typo.component";


const CardProduct = ({props, aboutPage = false, isWhitoutText = false}) => {
    const navigate = useNavigate()

    if(props === undefined) return ''
    
    const {imageUrl, imageUrlHover, name, price, isNew, id, type} = props;
    const linkHandler = () => navigate(`/shop/${type}${id}`)

    const IsNewChoice = () => {
        if(isNew) return <NewContainer><Typo type={TypoType.body_7}>New</Typo></NewContainer>
    }

    const NewOrder = () => {
        if(isNew) 
            return (
            <Fragment>
                <Typo type={TypoType.headline_5}>{name}</Typo>
                <Typo type={TypoType.body_3} opacity='.4'>Pre-Order 10% Sale</Typo>
                <FlexContainer>
                    <Typo type={TypoType.headline_5}>${(price * 90/100).toFixed(2)}</Typo>
                    <Typo type={TypoType.body_3_dash} opacity='.4'>${price}</Typo>
                </FlexContainer>
            </Fragment>
            )
        if(!isNew) return (
            <Fragment>
                <Typo type={TypoType.headline_5}>{name}</Typo>
                <Typo type={TypoType.headline_5}>${price}</Typo>
            </Fragment> 
        )    
        
    }

    return (
        <CardContainer>
            <ImgContainer onClick={linkHandler}>
                <CardImg image={imageUrl}>
                    <IsNewChoice/>
                </CardImg>
                <CardHover image={imageUrlHover}>
                    <IsNewChoice/>
                </CardHover>
            </ImgContainer>
            {  !isWhitoutText &&
                !aboutPage ? 
                <>
                    <NewOrder/>
                </>
                :
                <Typo type={TypoType.headline_5}>{aboutPage}</Typo>
            }
        </CardContainer>
    )
}

export default CardProduct;