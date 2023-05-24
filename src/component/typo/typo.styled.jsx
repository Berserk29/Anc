import styled, { css } from "styled-components";

export const MainHeading = styled.h1`
   font-size : ${props => props.size}rem;
   align-self: ${props => props.flex};
   margin-right: ${props => props.marginRight}rem;
   margin-left: ${props => props.marginLeft}rem;
   color: ${props => props.color};
   font-family: 'Scheherazade';
   text-transform: uppercase;
   font-weight: 400;
   letter-spacing: -5%;
   line-height: 120%;
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
    color: ${props => props.color};
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
    color: ${props => props.color};
    font-family: 'Scheherazade';
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
`

export const HeadingArial = styled(HeadingMain)`
    font-size : ${props => props.size - .3}rem;
    font-weight: 700;
    font-family: 'Arial';
    letter-spacing: -0.01em;
`

// New *************
const ArialTheme = css`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    line-height: 100%;
    color: ${props => props.color || 'white'};
    align-self : ${props => props.flex };
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    opacity: ${props => props.opacity};

    ${props => props.hover && `
        cursor: pointer;
        transition: color .3s;
        :hover {
            color: var(--color-hover);
        }
    `}
`

const ScheherazadeTheme = css`
    font-family: 'Scheherazade';
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: ${props => props.color || 'white'};
    align-self : ${props => props.flex };
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    opacity: ${props => props.opacity};
    
    ${props => props.hover && `
        cursor: pointer;
        transition: color .3s;
        :hover {
            color: var(--color-hover);
        }
    `}
`

export const Title01 = styled.h1`
    ${ScheherazadeTheme}
    font-size: 9.6rem;
    padding: 1rem;
`

export const DoubleContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Double01 = styled.h3`
    ${ScheherazadeTheme}
    font-size: 3.8rem;
    letter-spacing: 0.02em;
`

export const Double02 = styled.h3`
    ${ArialTheme}
    font-size: 3.6rem;
`

export const Title02 = styled.h2`
    ${ScheherazadeTheme}
    line-height: 120%;
    font-size: 6.6rem;
    letter-spacing: 0;
`

export const Title03 = styled.h1`
    ${ArialTheme}
    font-size: 8.6rem;
`

export const Headline01 = styled.h2`
    ${ArialTheme}
    font-size: 4rem;
`

export const Headline02 = styled.h3`
    ${ArialTheme}
    font-size: 3rem;
    line-height: 160%;
`
export const Headline03 = styled.h3`
    ${ArialTheme}
    font-size: 3rem;
    font-weight: 400;
    text-transform: capitalize;
`

export const Headline04 = styled.h4`
    ${ArialTheme}
    font-size: 2.6rem;
    line-height: 120%;
    text-transform: none;
`

export const Headline05 = styled.h5`
    ${ArialTheme}
    font-size: 1.8rem;
    text-transform: capitalize;
`

export const Body01 = styled.p`
    ${ArialTheme}
    font-size: 1.6rem;
    text-transform: capitalize;
`

export const Body02 = styled(Body01)`
    font-weight: 400;
`

export const Body03 = styled.p`
    ${ArialTheme}
    line-height: 160%;
    font-size: 1.4rem;
`

export const BodyDash03 = styled.p`
    ${ArialTheme}
    font-size: 1.4rem;
    font-weight: 400;
    text-decoration-line: line-through;
    letter-spacing: -0.02em;
`

export const Body04 = styled.p`
    ${ArialTheme}
    font-weight: 400;
    line-height: 160%;
    font-size: 1.4rem;
    letter-spacing: -0.01em;
    text-transform: none;
`

export const Body05 = styled(Body04)`
    font-size: 1.3rem;
`

export const Body06 = styled.p`
    ${ArialTheme}
    font-size: 1.3rem;
`






