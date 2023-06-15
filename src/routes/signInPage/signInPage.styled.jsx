import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const SectionContainer = styled.div`
    width: 100%;
    padding: 8rem 0 11rem 0;
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    @media ${mediaQuery.styledSmLaptop} {
        padding: 8rem 4rem 11rem 4rem;
    }
`

export const SignContainer = styled.div`
    width: 63rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media ${mediaQuery.styledSmTablet} {
        width: 100%;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    gap: ${props => props.gap}rem;
`

export const SignBtnActive = styled.button`
    width: 100%;
    height: ${props => props.h || 5.2}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black);
    cursor: pointer;
    border: 1.5px solid var(--color-white);
    border-bottom: none;
`

export const SignBtnNotActive = styled(SignBtnActive)`
    border: 1px solid var(--color-hover);
    border-bottom: 1.5px solid var(--color-white);
`

export const FormInput = styled.input`
    width: 100%;
    height: 6.6rem;
    background: none;
    background-color: var(--color-black);
    color: var(--color-white);
    font-size: 14px;
    border: none;
    border-bottom: 1px solid var(--color-hover);
    padding: 10px;
    transition: all .2s;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
        -webkit-text-fill-color: var(--color-white);
    }

    &:focus {
        outline: none;
        border-bottom: 1px solid var(--color-white);
    }
`

export const FormContainer = styled.div`
    padding-bottom: 4rem;
`

export const ErrorBox = styled.div`
    width: 100%;
    padding: 2rem;
    color: var(--color-white);
    font-size: 14px;
    font-family: 'Arial';
    font-weight: 700;
    background-color: var(--color-black);
    border: 1px solid var(--color-hover);
`