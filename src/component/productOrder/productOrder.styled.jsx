import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 34.5rem;
    @media ${mediaQuery.styledSmTablet} {
        width: 100%;
    }
`

export const IconContainer = styled.div`
    align-self: flex-end;
    display: flex;
    gap: 2rem;
    padding-bottom: 6rem;
`

export const IconCss = styled.img`
    width: 2.4rem;
    height: auto;
    transition: filter .3s;
    cursor: pointer;
`

export const FlexBox = styled.div`
    display: flex;
    justify-content: ${props => props.justify || 'space-between'};
    padding-bottom: ${props => props.paddingBottom || 2}rem;
    padding-top: ${props => props.paddingTop || 2}rem;
    gap: ${props => props.gap || 0}rem;
    align-items: ${props => props.align || 'center'};
`

export const FlexBoxLine = styled(FlexBox)`
    border-bottom: 1px solid ${props => props.borderColor || 'rgba(255,255,255,.3)'};
`

export const FlexColumn = styled.div`
    display: flex;
    width: 7.9rem;
    flex-direction: column;
    gap: ${props => props.gap || 0}rem;
    align-items: ${props => props.align || 'flex-start'};
    @media ${mediaQuery.styledTablet} {
        width: 8.5rem;
    }
`


export const PriceBox = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.gap || 2}px;
`