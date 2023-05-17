import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: flex;
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
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

export const TextCss = styled.p`
    color: var(--color-white);
    font-family: 'Arial';
    font-size: 1.4rem;
    line-height: 160%;
    letter-spacing: -1%;
`