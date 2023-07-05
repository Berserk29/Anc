import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const HeadingContainer = styled.div`
    background-color: var(--color-black);
    width: 100%;
    height: 31rem;
    display: flex;
    justify-content: center;
    @media ${mediaQuery.styledMobile} {
        height: 23rem;
    }
`

export const PositionContainer = styled.div`
    transform: translateY(3rem);
    @media ${mediaQuery.styledMobile} {
        
    }
`

export const PictureContainer = styled.div`
    background-color: var(--color-black);
    padding: 20rem 8rem 0 8rem;
    display: flex;
    flex-direction: column;
    @media ${mediaQuery.styledSmTablet} {
        padding: 8rem 2rem 0 2rem;
    }
`

export const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    row-gap: 20rem;
    column-gap: 2rem;
    @media ${mediaQuery.styledSmTablet} {
        row-gap: 8rem;  
    }
`