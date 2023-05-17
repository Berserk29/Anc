import styled from "styled-components";


export const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    overflow: hidden;
    padding-top: 1.2rem;
`
export const MovingBar = styled.span`
    width: 100%;
    height: 2px;
    background-color: var(--color-white);
    transition: transform .3s ease-out;
`

export const BtnView = styled.a`
    text-transform: uppercase;
    font-family: 'Arial';
    font-weight: 700;
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-white);
    cursor: pointer;
    :hover + ${MovingBar} {
        transform: translateX(-110%);
    }
`
