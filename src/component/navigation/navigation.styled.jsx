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


export const CartNumber = styled.span`
    position: absolute;
    top: -.9rem;
    right: -1.5rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-family: Arial;
    font-weight: 700;
    border: 2px solid var(--color-white);
    cursor: pointer;
    `

export const CartNumberReverse = styled(CartNumber)`
    background-color: transparent;
    border: 2px solid var(--color-black);
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
    /* Only work if I can hover --> touch cannot hover */
    @media (hover: hover) {
        :hover {
            filter: var(--filter-hover-white);
        }
    }
`
export const HamIcon = styled.img`
    width: 2.4rem;
    cursor: pointer;
    margin-bottom: 2px;
`

export const HamBox = styled.div`
    width: 20px;
    height: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: ${({ animation }) => (animation ? 'space-between' : 'center')};
    @media ${mediaQuery.styledTablet} {
        margin-top: .2rem;
    }
`

export const HamburgerLine = styled.span`
    width: 20px;
    height: 2px;
    background-color: ${props => props.color};
    display: inline-block;
    transition: transform .4s;
    transform-origin: left;

    &.first-line {
        transform: ${({ animation }) => (animation ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &.last-line {
        transform: ${({ animation }) => (animation ? 'rotate(-45deg)' : 'rotate(0)')};
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


export const MenuBtn = styled.button`
    font-weight: 'Arial';
    font-size: 16px;
    font-weight: 700;
    margin-top: .1rem;
    color: ${props => props.color};
    letter-spacing: -0.02em;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
