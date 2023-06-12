import Typo, {TypoType} from "../typo/typo.component";
import { ImgFullContainer } from "./imgFull.styled";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";


const ImgFull = ({image, position = 'center'}) => {
    const isMobile = useMediaQuery(mediaQuery.useMobile)
    return (
        <ImgFullContainer image={image} position={position}>
            { !isMobile ? 
                <>
                    <Typo type={TypoType.body_3}>Scroll to discover</Typo>
                    <Typo type={TypoType.body_3}>&copy; lab 2023</Typo>
                </>
                : ''
            }
        </ImgFullContainer>
    )
}

export default ImgFull;