import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    background-color: var(--color-black);
    justify-content: center;
`

export const SubTitleContainer = styled.div`
    padding-top: 20.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 20.6rem 20.6rem 0 0;
` 

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding-top: 11rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30.5rem);
    column-gap: 2rem;
    row-gap: 4rem;
`

export const ProductBtn = styled.a`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: var(--color-hover);
    transition: color .2s;
    cursor: pointer;
    
    :hover {
        color: var(--color-white);
    }
`

export const BtnActive = styled(ProductBtn)`
    color: var(--color-white);
    text-decoration-line: underline;
`


