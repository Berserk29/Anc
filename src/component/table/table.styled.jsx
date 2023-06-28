import styled from "styled-components";

export const HeadingContainer = styled.div`
    padding: 2rem 1.6rem;
    background-color: var(--color-grey-light);
    border-bottom: 1px solid var(--color-grey-light-2);
    `

export const FixedContainer = styled(HeadingContainer)`
    background-color: var(--color-white);
`

export const Input = styled.input`
    background: none;
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 16px;
    border: none;
    border-bottom: 1px solid var(--color-grey-light-2);
    padding: 2rem 1.6rem;
    cursor: pointer;
    
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        -webkit-text-fill-color: var(--color-black);
    }
    :focus {
        outline: none;
    }
`


export const SmallHeading = styled.div`
    padding: 1.2rem 1.6rem;
    background-color: var(--color-white);
`

export const SmallFixed = styled.div`
    background-color: var(--color-grey-light);
    border-bottom: 1px solid var(--color-grey-light-2);
    padding: 1.2rem 1.6rem;
    margin-bottom: 2.5rem;
`