import styled from "styled-components";

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
`

export const HomeContainer = styled.div`
    scroll-snap-align: start;
    background-color: var(--color-black);
    height: 100vh;
    width: 100%;
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