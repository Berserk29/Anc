import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ProductContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 12.8rem;
    justify-content: center;
    padding: 11rem 4rem 0 4rem;
    background-color: var(--color-black);
    @media ${mediaQuery.styledTablet} {
        gap: 5rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        flex-direction: column;
        gap: 8rem;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 50%;
    align-items: flex-end;
    @media ${mediaQuery.styledTablet} {
        width: 50%;
    }
    @media ${mediaQuery.styledSmTablet} {
        flex-direction: row;
        overflow-x: auto;
        width: 100%;
        gap: 0;
        height: 50rem;
    }
`

export const ImgProduct = styled.div`
    width: 63rem;
    height: 83rem;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    @media ${mediaQuery.styledSmLaptop} {
        width: 100%;
        height: 65rem;
    }
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        height: 50rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        width: 90%;
        aspect-ratio: 16/9;
        margin-right: 20px;
    }
`

export const OrderContainer = styled.div`
    width: 50%;
    @media ${mediaQuery.styledTablet} {
        width: 50%;
    }
    @media ${mediaQuery.styledSmTablet} {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`