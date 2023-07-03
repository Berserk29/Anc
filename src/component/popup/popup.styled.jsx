import styled from "styled-components";

export const PopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 2.4rem;
    z-index: 5;
    transform: translate(-50%, -50%);
    background-color: var(--color-white);
`

export const ImgPopup = styled.img`
    width: 9.3rem;
    height: 12rem;
    object-fit: cover;
    transform: translate3d(0px, 0px, 0.1px);
`

export const CloseBtn = styled.img`
   width : 2.4rem;
   height: 2.4rem;
   cursor: pointer;
`

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${props => props.flex || 'row'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    gap: ${props => props.gap || 1.6}rem;
`