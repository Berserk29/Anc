import styled from "styled-components";

export const SectionContainer = styled.div`
    width: 100%;
    height: 67rem;
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactContainer = styled.div`
    transform: translateX(17.5rem);
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || 2}rem;
    max-width: 35rem;
`