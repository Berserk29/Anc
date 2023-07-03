import styled, {css} from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

const SectionCss = css`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 15.8rem 5rem;
    background-color: var(--color-cream);
    align-items: flex-start;
    @media ${mediaQuery.styledMobile} {
        background-color: var(--color-white);
    }
`

export const Section = styled.div`
    ${SectionCss}
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        align-items: center;
        padding: 5rem;
        gap: 3rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 2rem;
    }
`

export const PaymentSection = styled.div`
    ${SectionCss}
    @media ${mediaQuery.styledMobile} {
        padding: 10rem 3rem;
    }
`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 100rem 0 1;
    width: 100%;
    gap: 5rem;
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

export const ErrorContainer = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${mediaQuery.styledTablet} {
        height: 10rem;
    }
`