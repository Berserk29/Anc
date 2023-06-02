import styled from "styled-components";

export const BoxContainer = styled.div`
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    padding: ${props => props.padding}px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: var(--color-white);
    top: 90px;
    right: ${props => props.right}px;
    z-index: 2000;
`

export const BoxItems = styled.div`
    /* height: 340px; */
    height: 300px;
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    overflow-y: auto;
    gap: 1rem;
`

export const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 6rem;
`