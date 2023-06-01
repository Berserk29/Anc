import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 12.8rem;
    justify-content: center;
    padding: 8rem 16rem 8rem 0;

    background-color: var(--color-black);
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const ImgProduct = styled.div`
    width: 63rem;
    height: 83rem;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
`