import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    border: 1px solid black;
    height: 22rem;
    width: 30.4rem;
    background-color: var(--color-white);
    cursor: pointer;
    padding: 4rem;
    text-align: center;
    transition: background-color .2s;
    :hover {
        background-color: #eee;
    }
`

export const CardImg = styled.img`
    width: 4rem;
    height: 4rem;
`

