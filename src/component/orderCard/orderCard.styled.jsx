import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2.4rem;
    background-color: var(--color-white);
`

export const FlexContainer = styled.div`
    display: flex;
    gap: ${props => props.gap};
    flex-direction: ${props => props.direction || 'row'};
    align-items: start;
`


export const ImgOrder = styled.img`
    width: 12rem;
    height: 14.3rem;
    object-fit: cover;
`