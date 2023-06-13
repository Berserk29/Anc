import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1.9rem 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-hover);
`

export const ProductContainer = styled.div`
    display: flex;
    margin-right: auto;
    gap: 1.6rem;
`

export const ImgCss = styled.img`
    width: 11rem;
    height: 14.3rem;
    object-fit: cover;
`

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FlexContainer = styled.div`
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
`