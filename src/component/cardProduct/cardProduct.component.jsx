import { useNavigate } from "react-router-dom";
import { CardContainer, ImgContainer, CardImg, CardHover, NewContainer} from "./cardProduct.styled"
import Typo, {TypoType} from "../typo/typo.component";


const CardProduct = ({props, aboutPage = false}) => {
    const navigate = useNavigate()

    if(props === undefined) return ''
    
    const {imageUrl, imageUrlHover, name, price, isNew } = props;
    const linkHandler = () => navigate('/product')

    const IsNewChoice = () => {
        if(isNew) return <NewContainer><Typo type={TypoType.body_7}>New</Typo></NewContainer>
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
            {!aboutPage ? 
                <>
                    <Typo type={TypoType.headline_5}>{name}</Typo>
                    <Typo type={TypoType.headline_5}>${price}</Typo>
                </>
                :
                <Typo type={TypoType.headline_5}>{aboutPage}</Typo>
            }
        </CardContainer>
    )
}

export default CardProduct;