import styled from "styled-components";

export const RadioBtn = styled.button`
    width: ${props => props.w || 4}rem;
    height: ${props => props.h || 4}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    cursor: pointer;
    transition: background-color .3s;
    :active {
        background-color: var(--color-white);
    }
`

export const RadioBtnActive = styled(RadioBtn)`
    background-color: var(--color-white);
    outline: 1px solid var(--color-black);
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    gap: ${props => props.gap}rem;
`

export const SumBtn = styled(RadioBtn)`
    width: ${props => props.w || 3}rem;
    height: ${props => props.h || 3}rem;
`

export const ColorSquare = styled.div`
    width: ${props => props.w || 4}rem;
    height: ${props => props.h || 4}rem;
    background-color: ${props => props.color || 'blue'};
    border: 1px solid var(--color-white);
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