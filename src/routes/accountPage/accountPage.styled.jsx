import styled from "styled-components"

export const AccountContainer = styled.div`
    display: flex;
    background-color: var(--color-white);
    width: 100%;
    height: 90rem;
    justify-content: center;
`

export const SubTitleContainer = styled.div`
    padding-top: 20.6rem;
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    padding: 11.5rem 15rem 0 0;
` 

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding-top: 11rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30.5rem);
    column-gap: 2rem;
    row-gap: 3.2rem;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const FaqContainer = styled(TitleContainer)`
    margin-top: 2.5rem;
`

export const AccountBox = styled.div`
    border-bottom: 1px solid black;
    padding: 0 5.9rem 0.8rem 0;
`