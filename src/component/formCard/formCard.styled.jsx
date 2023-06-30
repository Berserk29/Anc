import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";
import { SelectCss } from "../formAddress/formAddress.styled";

export const ImgIcon = styled.img`
    width: 3.2rem;
`

export const GridContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 21.5rem 1fr;
    border-top: 1px solid var(--color-black);
    @media ${mediaQuery.styledMobile} {
        grid-template-columns: 1fr;
        border-top: none;
    }
`

export const BoxSelect = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    background-color: var(--color-white);
    align-items: center;
    border-bottom: 1px solid var(--color-grey-light-2);
    @media ${mediaQuery.styledMobile} {
        justify-content: start;
        align-items: flex-start;
        gap: 0;
        background-color: var(--color-grey-light);
    }
`

export const Expiration = styled(SelectCss)`
    width: 12rem;
    @media ${mediaQuery.styledMobile} {
        background-color: var(--color-white);
        padding: 1rem 2rem;
    }
`

export const CvvInput = styled.input`
    width: 5rem;
    height: 3rem;
    text-align: center;
    margin-left: 1.5rem;
    font-size: 1.5rem;
`

export const CvvContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-light-2) ;
    gap: 2rem;
    @media ${mediaQuery.styledMobile} {
        background-color: var(--color-grey-light);
        padding: 0.5rem;
    }
`