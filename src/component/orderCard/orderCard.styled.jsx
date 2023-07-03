import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2.4rem;
    background-color: var(--color-white);
    @media ${mediaQuery.styledMobile} {
        flex-direction: column;
        gap: 3rem;
        padding: 2.4rem 0;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    gap: ${props => props.gap};
    flex-direction: ${props => props.direction || 'row'};
    align-items: flex-start;
    margin-right: auto;
`

export const ImgOrder = styled.img`
    height: 14.3rem;
    width: 12rem;
    object-fit: cover;
    transform: translate3d(0px, 0px, 0.1px);
`