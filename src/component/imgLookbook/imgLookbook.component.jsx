import { useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { GridImage } from "./imgLookbook.styled";
import { variantUp } from "../../helper/animationMotion";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

const ImgLookbook = ({props}) => {
    const {column, ratio, imageUrl, id, breakColumn} = props;

    const isTablet = useMediaQuery(mediaQuery.useTablet)

    const control = useAnimation()
    const [ref, inView] = useInView({threshold: 0.4})

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])

    return (
        <GridImage 
            ref={ref}
            variants={variantUp}
            initial='hidden'
            animate={control}  
            column={ !isTablet ? column : breakColumn} 
            ratio={ratio} 
            src={imageUrl} 
            alt={`img_${id}`}
        />
    )

}

export default ImgLookbook;