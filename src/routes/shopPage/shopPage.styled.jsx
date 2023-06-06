import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ProductContainer = styled.div`
    display: flex;
    background-color: var(--color-black);
    justify-content: center;
`

export const SubTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 20.6rem 20.6rem 0 0;
` 

export const SubTitleBreak = styled.div`
    display: flex;
    width: 100%;
    gap: 3rem;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding-top: 11rem;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        padding: 11rem 1rem 0 1rem;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30.5rem);
    column-gap: 2rem;
    row-gap: 4rem;
    @media ${mediaQuery.styledTablet} {
        justify-content: center;
        grid-template-columns: repeat( auto-fit, minmax( 30.5rem , 30.5rem) );
    }
`

export const ProductBtn = styled.a`
    font-family: Arial;
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

export const TitleBreakContainer = styled.div`
    display: grid;
    gap: 6rem;
    justify-content: center;
`


