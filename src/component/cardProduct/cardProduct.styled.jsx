import styled, {css} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
` 

export const ImgContainer = styled.div`
    position: relative;
    width: 30.5rem;
    height: 43rem;
    @media ${mediaQuery.styledSmTablet} {
        width: 28rem;
        height: 40rem;
    }

    @media ${mediaQuery.styledMobile} {
        width: 20rem;
        height: 31rem;
    }
`

const cardCss = css`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 42.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    @media ${mediaQuery.styledSmTablet} {
        height: 39rem;
    }
    @media ${mediaQuery.styledMobile} {
        height: 30rem;
    }
`

export const CardImg = styled.div`
    ${cardCss}
    transition: opacity .3s linear;
    z-index: 2;
    :hover{
        opacity: 0;
    }
`

export const CardHover = styled.div`
    ${cardCss}
    z-index: 1;
`

export const NewContainer = styled.div`
    height: 4rem;
    width: 4rem;
    background-color: var(--color-grey);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FlexContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`