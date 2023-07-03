import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95.5rem;
    justify-content: center;
    text-align: start;
    gap: 2rem;
    @media ${mediaQuery.styledSmLaptop} {
        width: 63rem;
    }
    @media ${mediaQuery.styledTablet} {
        width: 100%;
    }
`

export const TitleContainer = styled.div`
    width: 100%;
    border-bottom: 1.5px solid var(--color-hover);
`