import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const AboutContainer = styled.div`
    background-color: var(--color-black);
    padding: 15rem 8rem 0 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21.5rem;
    @media ${mediaQuery.styledSmLaptop} {
        padding: 15rem 6rem 0 6rem;
    }
    @media ${mediaQuery.styledTablet} {
        padding: 20rem 6rem 0 6rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 15rem 2rem 0 2rem;
        gap: 10rem;
    }
`

export const AboutSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8rem;
    max-width: 128rem;
    @media ${mediaQuery.styledSmLaptop} {
        gap: 6rem;
    }
    @media ${mediaQuery.styledTablet} {
        flex-direction: column-reverse;
    }
`

export const ImgSection = styled.img`
    width: 50%;
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 16/9;
    }
    @media ${mediaQuery.styledSmTablet} {
        aspect-ratio: 4/3;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 51rem;
    @media ${mediaQuery.styledSmLaptop} {
        gap: 2rem;
    }

    @media ${mediaQuery.styledTablet} {
        width: 100%;
        gap: 4rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    gap: 2rem;
    @media ${mediaQuery.styledSmLaptop} {
        display: grid;
        width: 100%;
        justify-content: center;
        justify-items: center;
        grid-template-columns: repeat(2, 30.5rem);
        row-gap: 4rem;
        column-gap: 3rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        grid-template-columns: repeat(2, 28rem);
        column-gap: 2rem;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: repeat(auto-fit, minmax( 20rem, 20rem ))
    }
`
