import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

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
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
        background-color: var(--color-grey-light);
    }
`

export const SelectCss = styled.select`
    margin-left: 1.6rem;
    width: 30rem;
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    background-color: var(--color-grey-light);
    border: none;
    border: .5px solid var(--color-grey-light-2);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 4rem) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
    @media ${mediaQuery.styledTablet} {
        background-position: 
        calc(100% - 16px) calc(1em + 2px),
        calc(100% - 11px) calc(1em + 2px),
        calc(100% - 4rem) 0.5em;
    }
    @media ${mediaQuery.styledMobile} {
        max-width: 30rem;
        width: 90%;
        font-size: 1.4rem;
        background-color: var(--color-white);
        padding: 1rem 2rem;
    }
`