import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery";


export const AncLogoCss = styled.img`
    width: 10rem;
    @media ${mediaQuery.styledMobile} {
        width: 8.5rem;
    }
`
export const AncLogoCssCursor = styled(AncLogoCss)`
    cursor: pointer;
`