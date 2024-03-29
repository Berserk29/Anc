import styled from "styled-components";

export const RadioBtn = styled.button`
    width: ${props => props.w || '4rem'};
    height: ${props => props.h || '4rem'};
    max-width: ${props => props.maxWidth || 'none'};
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

export const RadioHover = styled(RadioBtnActive)`
    outline: 1px solid var(--color-hover);
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    gap: ${props => props.gap}rem;
`

export const SumBtn = styled(RadioBtn)`
    width: ${props => props.w || '3rem'};
    height: ${props => props.h || '3rem'};
`

export const SumBtnWhite = styled(SumBtn)`
    background-color: var(--color-white);
    outline: 1px solid var(--color-black);
`

export const ColorSquare = styled.div`
    width: ${props => props.w || '4rem'};
    height: ${props => props.h || '4rem'};
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

export const MinusReverse = styled(Minus)`
    background-color: var(--color-black);
`

export const PlusReverse = styled(Plus)`
    background-color: var(--color-black);
    ::before {
        background-color: var(--color-black);
    }
`