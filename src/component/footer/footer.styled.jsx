import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FooterContainer = styled.div`
    display: flex;
    height: 58rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background-color: var(--color-black);
    gap: 3.2rem;
    padding: 8rem 0;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    gap: 2.4rem;
`

export const FooterLink = styled.a`
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--color-white);
    font-family: 'Arial';
    text-transform: uppercase;
    letter-spacing: -1%;
    cursor: pointer;
    transition: color .2s;
    :hover {
        color: var(--color-hover-white);
    }
    `

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    @media ${mediaQuery.styledMobile} {
        text-align: center;
        padding: 2rem;
    }
`
