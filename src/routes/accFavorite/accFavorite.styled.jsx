import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30.5rem);
    column-gap: 2rem;
    row-gap: 4rem;
    @media ${mediaQuery.styledSmLaptop} {
        grid-template-columns: repeat(2, 30.5rem);
    }
    @media ${mediaQuery.styledTablet} {
        justify-content: center;
        grid-template-columns: repeat( auto-fit, minmax(30rem , 30rem) );
    }
    @media ${mediaQuery.styledSmTablet} {
        grid-template-columns: repeat( auto-fit, minmax(28rem , 28rem) );
    }
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: repeat( auto-fit, minmax(20rem , 20rem) );
    }
`