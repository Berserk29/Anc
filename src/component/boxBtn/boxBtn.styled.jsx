import styled from "styled-components";

// TESTING
export const RadioBtn = styled.button`
    width: ${props => props.w}rem;
    height: ${props => props.h}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid var(--color-white);
    cursor: pointer;
`

export const RadioBtnActive = styled(RadioBtn)`
    background-color: var(--color-white);
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
`

export const SumBtn = styled(RadioBtn)`
    width: 3rem;
    height: 3rem;
`


export const Minus = styled.span`
    width: 10px;
    height: 2px;
    background-color: var(--color-white);
`

export const Plus = styled(Minus)`
    position: relative;
    ::before {
        position: absolute;
        top: -4px;
        left: 4px;
        content: "";
        width: 2px;
        height: 10px;
        background-color: var(--color-white);
    }
`