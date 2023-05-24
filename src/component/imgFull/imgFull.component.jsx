import Typo, {TypoType} from "../typo/typo.component";
import { ImgFullContainer } from "./imgFull.styled";


const ImgFull = ({image, position = 'center'}) => {
    return (
        <ImgFullContainer image={image} position={position}>
            <Typo type={TypoType.body_3}>Scroll to discover</Typo>
            <Typo type={TypoType.body_3}>&copy; lab 2023</Typo>
        </ImgFullContainer>
    )
}

export default ImgFull;