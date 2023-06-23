import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Section = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 15.8rem 8rem;
    background-color: var(--color-white);
    align-items: flex-start;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        align-items: center;
        padding: 5rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 1rem;
    }
`

export const ProductContainer = styled.div`
    flex: 120rem 0 1;
    width: 100%;
    @media ${mediaQuery.styledTablet} {
        flex: none;
    }
`

export const OrderContainer = styled.div`
    width: 30.5rem;
    @media ${mediaQuery.styledTablet} {
        width: 50rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: 100%;
    }
`