import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1.9rem 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-hover);
`

export const ProductContainer = styled.div`
    display: flex;
    margin-right: auto;
    gap: 1.6rem;
    @media ${mediaQuery.styledMobile} {
        gap: 1.2rem;
    }
`

export const ImgCss = styled.img`
    width: 11rem;
    height: 14.3rem;
    object-fit: cover;
`

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15rem;
    @media ${mediaQuery.styledSmTablet} {
        justify-content: center;
        gap: 2.5rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: 11rem;
    }
`

export const FlexContainer = styled.div`
    width: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${mediaQuery.styledSmTablet} {
        flex-direction: column;
        gap: 4rem;
        width: 15rem;
    }
`
