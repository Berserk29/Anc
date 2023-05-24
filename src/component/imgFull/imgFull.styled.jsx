import styled from "styled-components";

export const ImgFullContainer = styled.div`
    background-image: url(${props => props.image});
    background-position: ${props => props.position};
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 67rem;
    background-size: cover;
    padding: 4rem 8rem;
`