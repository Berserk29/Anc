import { useAnimation } from "framer-motion";
import { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { GridImage } from "./imgLookbook.styled";
import { variantUp } from "../../helper/animationMotion";


// TODO WHEN PHONE BREAK CHANGING COLUMN FOR BREAKCOLUMN on the props

const ImgLookbook = ({props}) => {
    const {column, ratio, imageUrl, id} = props

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
            column={column} 
            ratio={ratio} 
            src={imageUrl} 
            alt={`img_${id}`}/>
    )

}

export default ImgLookbook;