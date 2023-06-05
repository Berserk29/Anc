import styled from "styled-components";

export const PopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50rem;
    height: 20rem;
    /* border-radius: 10px; */
    transform: translate(-50%, -50%);
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* gap: 5rem; */
`

export const ImgPopup = styled.img`
    width: 15rem;
    height: 15rem;
    object-fit: cover;
`

export const IconImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flex || 'row'};
    gap: ${props => props.gap}rem;
    align-items: center;
`