import styled from "styled-components";

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
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

export const TitleContainer = styled.div`
    width: 55rem;
    display: flex;
    flex-direction: column;
`

export const NewContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`

export const ScrollContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    bottom: 40px;
    cursor: pointer;
`
export const ArrowDown = styled.img`
    width: 1.2rem;
`


export const HomeContainer = styled.div`
    scroll-snap-align: start;
    height: 100vh;
    width: 100%;
    background-color: black;
    font-size: 3rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HomeContainerTest = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
    background-color: red;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`