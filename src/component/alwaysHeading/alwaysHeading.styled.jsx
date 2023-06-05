import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const TitleContainer = styled.div`
    width: 54.8rem;
    display: flex;
    flex-direction: column;
    @media ${mediaQuery.styledMobile} {
        width: 34rem;
    }
`

export const NewContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`