import styled from "styled-components";

// TESTING

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    color: white;
`

export const Section = styled.div`
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
`