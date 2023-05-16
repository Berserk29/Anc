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
    color: var(--color-white);
    z-index: 100;
`

export const HamContainer = styled.div`
    display: flex;
    width: 11.4rem;
    align-items: center;
    cursor: pointer;
    :hover, NavIcon {
        transition: filter .3s;
        filter: var(--filter-hover-white);
    }
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
export const HamIcon = styled(NavIcon)`
    margin-bottom: 2px;
`


export const AncLogo = styled.img`
    width: 10rem;
    cursor: pointer;
`