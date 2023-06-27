import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 0 2rem;
    background-color: transparent;
    border-left: 1px solid var(--color-hover);
    cursor: pointer;

    :first-child{
        border-left: none;
    }

    @media ${mediaQuery.styledSmTablet} {
        border-left: none;
        border-top: 1px solid var(--color-hover);
        padding: 2rem 6rem;
        :first-child {
            border-top: none;
        }
    }
    @media ${mediaQuery.styledMobile} {
        padding: 2rem 3rem;
    }

`

export const IconCss = styled.img`
    height: 1.2rem;
    width: auto;
`