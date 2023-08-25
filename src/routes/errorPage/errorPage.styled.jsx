import styled, {css} from "styled-components";

const style = css`
    font-weight: 700;
    color: white;
`

export const Container = styled.section`
    display: flex;
    height: 100vh;
    min-height: 80rem;
    padding: 10rem 20rem;
    gap: 8rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-image: url(${props => props.image});
`

export const Heading = styled.h2`
    font-size: 5rem;
    padding-bottom: 4rem;
    ${style}
`

export const Text = styled.p`
    font-size: 3rem;
    line-height: 140%;
    ${style}
`

export const Button = styled.button`
    width: 12rem;
    height: 4rem;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
`