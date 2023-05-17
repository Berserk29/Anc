import styled from "styled-components";

export const MainHeading = styled.h1`
   font-size : ${props => props.size}rem;
   align-self: ${props => props.flex};
   margin-right: ${props => props.marginRight}rem;
   margin-left: ${props => props.marginLeft}rem;
   font-family: 'Scheherazade';
   text-transform: uppercase;
   font-weight: 400;
   letter-spacing: -5%;
   line-height: 120%;
   color: var(--color-white);
   padding: 10px;
`

export const ArialHeading = styled(MainHeading)`
    margin-right: 0;
    font-family: 'Arial';
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1%;
    padding: 0;
`

export const SubArialHeading = styled.span`
    font-size : ${props => props.size}rem;
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    color: var(--color-white);
    text-transform: uppercase;
    font-family: 'Arial';
    font-weight: 700;
    line-height: 160%;
`

export const HoverArialHeading = styled(SubArialHeading)`
    cursor: pointer;
    :hover {
        transition: color .3s;
        color: var(--color-hover-white);
    }
`

export const HeadingMain = styled.h2`
    display: inline;
    font-size : ${props => props.size}rem;
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    font-family: 'Scheherazade';
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
`

export const HeadingArial = styled(HeadingMain)`
    font-size : ${props => props.size - .3}rem;
    font-weight: 700;
    font-family: 'Arial';
    letter-spacing: -0.01em;
`