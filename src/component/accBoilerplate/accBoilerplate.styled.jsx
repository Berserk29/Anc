import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const AccountContainer = styled.div`
    display: flex;
    background-color: var(--color-cream);
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 11rem 0;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column-reverse;
        padding: 11rem 3rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        flex-direction: column-reverse;
        padding: 7rem 1rem;
    }
    @media ${mediaQuery.styledMobile} {
        background-color: ${props => props.mobileColor};
    }
`

export const SubTitleContainer = styled.div`
    padding-top: 20.6rem;
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    padding: 11.5rem 13rem 0 0;
    @media ${mediaQuery.styledTablet} {
        padding: 10rem 0 0 0;
        align-items: center;
    }
` 

export const AccountBox = styled.div`
    border-bottom: 1px solid black;
    padding: 0 5.9rem .8rem 0;
    @media ${mediaQuery.styledSmLaptop} {
        padding: 0 4rem .8rem 0;
    }
    @media ${mediaQuery.styledTablet} {
        padding: 2rem 0;
        width: 50rem;
        text-align: center;
    }
    @media ${mediaQuery.styledMobile} {
        width: 25rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @media ${mediaQuery.styledTablet} {
        display: grid;
        grid-template-columns: repeat(3, 14rem);
        justify-content: center;
        justify-items: center;
        gap: 4rem;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: repeat(2, 12rem);
    }
`

export const LogoutContainer = styled.div`
    margin-top: 2.5rem;
    @media ${mediaQuery.styledTablet} {
        margin-top: 0;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '6.4rem'};
    @media ${mediaQuery.styledTablet} {
        text-align: center;
    }
`