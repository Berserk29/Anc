import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

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
    @media ${mediaQuery.styledSmTablet} {
        padding: 3rem 3rem;
    }
`

export const HamContainer = styled.div`
    display: flex;
    width: 11.4rem;
    align-items: center;
    cursor: pointer;
    gap: 1.4rem;
    @media ${mediaQuery.styledSmTablet} {
        width: 7.5rem;
    }
`

export const CartNumber = styled.span`
    position: absolute;
    top: -.8rem;
    right: -1.2rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-family: Arial;
    font-weight: 700;
    outline: 1.5px solid var(--color-white);
    transition: outline .3s color .3s;
    cursor: pointer;
`

export const CartNumberReverse = styled(CartNumber)`
    background-color: transparent;
    outline: 1.5px solid var(--color-black);
    color: var(--color-black);
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
