import styled from "styled-components";

export const HeadingContainer = styled.div`
    background-color: var(--color-black);
    width: 100%;
    height: 31rem;
    display: flex;
    justify-content: center;
`

export const PositionContainer = styled.div`
    transform: translateY(3rem);
`

export const PictureContainer = styled.div`
    background-color: var(--color-black);
    /* TODO AT THE PHONE BREAKPOINT THIS PADDING WILL GO MUCH SMALLER*/
    padding: 20rem 8rem 0 8rem;
    display: flex;
    flex-direction: column;
`

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    /* TODO AT THE PHONE BREAKPOINT THIS ROW-GAP WILL GO MUCH SMALLER*/
    /* row-gap: 20rem; */
    row-gap: 8rem;
    column-gap: 2rem;
`