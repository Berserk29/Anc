import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${props => props.sticky ? 'fixed' : 'absolute'};
    top: 0;
    left: 0;
    width: 100%;
    padding: 4rem 8rem;
    background-color: transparent;
    z-index: 1000;
`

export const HamContainer = styled.div`
    display: flex;
    width: 11.4rem;
    align-items: center;
    cursor: pointer;
    gap: 1.4rem;
`

export const CartNumber = styled.span`
    position: absolute;
    top: -.6rem;
    right: -1.1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--color-black);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid var(--color-white);
    transition: all .3s;
    cursor: pointer;
`

export const IconContainer = styled.div`
    display: flex;
    gap: 2.7rem;
    position: relative;
`

export const NavIcon = styled.img`
    width: 2.4rem;
    cursor: pointer;
    position: relative;
    transition: filter .3s;
    :hover {
        filter: var(--filter-hover-white);
    }
    :hover + ${CartNumber} {
        border: 1px solid var(--color-hover);
        color: var(--color-hover);
    }
`
export const HamIcon = styled.img`
    width: 2.4rem;
    cursor: pointer;
    margin-bottom: 2px;
`

export const MenuBtn = styled.button`
    font-weight: 'Arial';
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.color};
    letter-spacing: -0.02em;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
