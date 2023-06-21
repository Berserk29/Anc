import styled from "styled-components"
import mediaQuery from "../../helper/mediaQuery"

export const Section = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 15.8rem 8rem;
    background-color: var(--color-white);
    align-items: start;
`

export const GridContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 21.5rem 1fr;
    border-top: 1px solid var(--color-black);
`

export const ProductContainer = styled.div`
    flex: 100rem 0 1;
    width: 100%;
`

export const OrderContainer = styled.div`
    width: 30.5rem;
`

export const Input = styled.input`
    background: none;
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 1.6rem;
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

export const BoxSelect = styled.div`
    display: flex;
    width: 100%;
    height: 7rem;
    background-color: var(--color-white);
    align-items: center;
    border-bottom: 1px solid var(--color-grey-light-2);
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
`

export const Expiration = styled(SelectCss)`
    width: 12rem;
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
`

export const ImgIcon = styled.img`
    width: 3.2rem;
`

export const SpaceContainer = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`