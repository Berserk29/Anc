import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const InfoContainer = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    border-bottom: 1px solid var(--color-hover);
    @media ${mediaQuery.styledSmLaptop} {
        padding: 2.5rem 0;
    }
    @media ${mediaQuery.styledTablet} {
        padding: 4rem 0;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`