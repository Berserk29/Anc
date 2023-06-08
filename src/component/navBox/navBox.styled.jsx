import styled from "styled-components";

export const BoxContainer = styled.div`
    position: absolute;
    width: ${props => props.width}rem;
    max-height: ${props => props.height}rem;
    padding: ${props => props.padding}rem;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: var(--color-white);
    top: 40px;
    right: ${props => props.right}rem;
    z-index: 2000;
`

export const BoxItems = styled.div`
    height: ${props => props.height || '100%'};
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    overflow-y: auto;
    gap: ${props => props.gap}rem;                                                                                                                                                                                                                                            ;
`

export const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8rem;
`