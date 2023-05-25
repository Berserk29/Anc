import styled, {css} from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
` 

export const ImgContainer = styled.div`
    position: relative;
    width: 30.5rem;
    height: 43rem;
`

const cardCss = css`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    width: 100%;
    height: 42.5rem;
    cursor: pointer;
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