import { useNavigate } from "react-router-dom";
import { CardContainer, ImgContainer, CardImg, CardHover } from "./productCard.styled"
import Typo, {TypoType} from "../typo/typo.component";

const ProductCard = ({props}) => {
    const navigate = useNavigate()

    if(props === undefined) return ''
    
    const {imageUrl, imageUrlHover, name, price} = props;
    const linkHandler = () => navigate('/product')

    return (
        <CardContainer>
            <ImgContainer onClick={linkHandler}>
                <CardImg image={imageUrl}/>
                <CardHover image={imageUrlHover}/>
            </ImgContainer>
            <Typo type={TypoType.headline_5}>{name}</Typo>
            <Typo type={TypoType.headline_5}>${price}</Typo>
        </CardContainer>
    )
}

export default ProductCard;