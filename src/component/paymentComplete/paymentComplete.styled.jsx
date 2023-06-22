import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: center;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 52rem;
    gap: 1.6rem;
    @media ${mediaQuery.styledMobile} {
        width: 100%;
    }
`