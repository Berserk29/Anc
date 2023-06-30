import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const GridContainer = styled.div`
    display: grid;
    width: 95.5rem;
    grid-template-columns: 20rem 1fr;
    justify-content: center;
    text-align: start;
    @media ${mediaQuery.styledSmLaptop} {
        width: 63rem;
        grid-template-columns: 15rem 1fr;
    }
    @media ${mediaQuery.styledTablet} {
        width: 100%;
        grid-template-columns: 20rem 75%;
    }
    @media ${mediaQuery.styledSmTablet} {
        grid-template-columns: max-content 1fr;
        padding: 0 1rem;
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr;
    }
`