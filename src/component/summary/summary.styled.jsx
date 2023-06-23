import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30.5rem;
    gap: 1.6rem;
    border: 1px solid var(--color-hover);
    background-color: var(--color-white);
    padding: 2.9rem 1.7rem;
    @media ${mediaQuery.styledTablet} {
        width: 50rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: 100%;
    }
`

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-bottom: 1px solid var(--color-hover);
    border-top: 1px solid var(--color-hover);
    padding: 1.6rem 0;
`

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.6rem;
`