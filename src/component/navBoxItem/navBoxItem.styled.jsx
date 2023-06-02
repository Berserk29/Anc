import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flex || 'row'};
    width: 100%;
    gap: 1.6rem;
    padding-bottom: 1rem;
    border-bottom: ${props => props.border && '1px solid var(--color-hover)'};
`

export const ImgProduct = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 9.2rem;
    height: 12rem;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap}rem;
`

export const LikedImg = styled(ImgProduct)`
    transition: transform .3s;
    cursor: pointer;
    :hover {
        transform: scale(0.95);
    }
`





