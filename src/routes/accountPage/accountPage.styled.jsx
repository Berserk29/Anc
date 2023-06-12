import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const AccountContainer = styled.div`
    display: flex;
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 11rem 0;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column;
        padding: 11rem 3rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 11rem 0.5rem;
    }
`

export const SubTitleContainer = styled.div`
    padding-top: 20.6rem;
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    padding: 11.5rem 13rem 0 0;
` 

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    @media ${mediaQuery.styledTablet} {
        text-align: center;
    }
`


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30.5rem);
    column-gap: 2rem;
    row-gap: 3.2rem;
    @media ${mediaQuery.styledSmLaptop} {
        grid-template-columns: repeat(2, 30.5rem);
    }
    @media ${mediaQuery.styledTablet} {
        justify-content: center;
        grid-template-columns: repeat( auto-fit, minmax(30rem , 30rem) );
    }
    @media ${mediaQuery.styledSmTablet} {
        grid-template-columns: repeat( auto-fit, minmax(25rem , 25rem) );
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: repeat( auto-fit, minmax(20rem , 20rem) );
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const FaqContainer = styled(TitleContainer)`
    margin-top: 2.5rem;
`

export const AccountBox = styled.div`
    border-bottom: 1px solid black;
    padding: 0 5.9rem .8rem 0;
    @media ${mediaQuery.styledSmLaptop} {
        padding: 0 4rem .8rem 0;
    }
`