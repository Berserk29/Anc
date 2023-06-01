import styled from "styled-components";

export const PictureContainer = styled.div`
    background-color: var(--color-black);
    padding: 20rem 8rem 0 8rem;
    display: flex;
    flex-direction: column;
`

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    row-gap: 20rem;
    column-gap: 2rem;
`

export const GridImage = styled.img`
    display: inline-block;
    aspect-ratio: ${props => props.ratio};
    grid-column: ${props => props.column};
    width: 100%;
    object-fit: cover;
`