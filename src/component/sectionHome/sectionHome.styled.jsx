import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    /* INFO (SCROLL BY SECTION) */
    /* scroll-snap-align: start; */
`

export const HalfImage = styled.div`
    background-image: url(${props => props.image});
    width: 50%;
    background-size: cover;
    background-position: center;
`

export const FullImage = styled(HalfImage)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.8rem;
`

export const HalfText = styled.div`
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
