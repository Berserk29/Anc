import styled from "styled-components";

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
`

export const Header = styled.div`
    position: relative;
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    align-items: center;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`

export const ScrollContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    bottom: 40px;
`
export const ArrowDown = styled.img`
    width: 1.2rem;
`

export const HomeFooter = styled.div`
    position: relative;
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: end;
    justify-content: center;
`