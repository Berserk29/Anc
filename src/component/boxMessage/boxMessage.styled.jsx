import styled from "styled-components"

export const ErrorBox = styled.div`
    width: 100%;
    padding: 2rem;
    color: var(--color-white);
    font-size: 15px;
    font-family: 'Arial';
    font-weight: 700;
    background-color: var(--color-black);
    border: 1px solid var(--color-hover);
    margin-bottom: 1rem;
`

export const ErrorBoxWhite = styled(ErrorBox)`
    background-color: var(--color-white);
    color: var(--color-black);
    border: 1.5px solid var(--color-black);
`

export const SuccessBox = styled(ErrorBoxWhite)`
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 2px solid #2ca792;
    color: var(--color-black);
`

export const IconCss = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`