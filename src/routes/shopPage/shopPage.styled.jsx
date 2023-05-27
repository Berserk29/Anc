import styled from "styled-components";


export const ProductContainer = styled.div`
    display: flex;
    background-color: var(--color-black);
`

export const SubTitleContainer = styled.div`
    /* height: 100%; */
    /* width: 40.5rem; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 20.6rem 25.6rem 0 8rem;
` 

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8rem;
    padding-top: 11rem;
`

export const GridContainer = styled.div`
    display: grid;
    padding-right: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(30.5rem, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
    align-content: center;

    @media (min-width: 2055px) {
        grid-template-columns: repeat(auto-fit, minmax(30.5rem, 30.5rem));
    }
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


