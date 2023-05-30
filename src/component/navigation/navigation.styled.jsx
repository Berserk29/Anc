import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
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

export const IconContainer = styled.div`
    display: flex;
    gap: 2.7rem;
`

export const NavIcon = styled.img`
    width: 2rem;
    cursor: pointer;
    :hover {
        transition: filter .3s;
        filter: var(--filter-hover-white);
    }
`
export const HamIcon = styled.img`
    width: 2rem;
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