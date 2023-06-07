import styled from "styled-components";
import { motion } from "framer-motion";
import mediaQuery from "../../helper/mediaQuery";

export const Section = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: black;
    /* INFO (SCROLL BY SECTION) */
    /* scroll-snap-align: start; */
`

export const HalfImage = styled.div`
    background-image: url(${props => props.image});
    width: 50%;
    background-size: cover;
    background-position: center;
`
export const CarouselContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const CarouselText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    z-index: 2;
    align-items: center;
    gap: 1.6rem;
`

export const CarouselBtnContainer = styled(motion.div)`
    position: absolute;
    top: 90vh;
    display: flex;
    justify-self: end;
    flex-direction: row;
    gap: 2rem;
    z-index: 2;
    @media ${mediaQuery.styledTablet} {
        gap: 8rem;
    }
`

export const CarouselBtn = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--color-white);
    border-radius: 50%;
    transition: opacity .3s;
    opacity: ${props => props.opacity};
    outline: 1px solid var(--color-hover);
    :hover {
        opacity: 1;
    }
    @media ${mediaQuery.styledTablet} {
        width: 2rem;
        height: 2rem;
    }
`

export const CarouselImg = styled.div`
    opacity: ${props => props.opacity};
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: ${props => props.position || 'center'};
    transition: opacity .8s;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`


export const HalfText = styled(motion.div)`
    background-color: var(--color-black);
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FullText = styled(HalfText)`
    width: 100%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 39rem;
    gap: 3rem;
    align-items: start;
`

export const InstaContainer = styled(TextContainer)`
    align-items: center;
    text-align: center;
`

export const ResponsiveSection = styled.div`
    width: 100%;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.35)), url(${props => props.image});
    /* background-size and position always after background */
    background-size: cover;
    background-position: ${props => props.position};
    display: flex;
    align-items: center;
    justify-content: start;
`

export const ResTextContainer = styled(TextContainer)`
    max-width: 100%;
    padding: 0 16vw;
`
