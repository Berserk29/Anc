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
        padding: 20rem 3rem 0 3rem;
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
        grid-template-columns: repeat(2, 1fr);
        row-gap: 8rem;
        column-gap: 4rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        grid-template-columns: 1fr;
    }
`
