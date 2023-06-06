import styled, { css } from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

const ArialTheme = css`
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    line-height: 100%;
    color: ${props => props.color || 'white'};
    align-self : ${props => props.flex };
    justify-self: ${props => props.justify};
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    margin-bottom: ${props => props.marginBottom}rem;
    margin-top: ${props => props.marginTop}rem;
    max-width: ${props => props.maxWidth}rem;
    opacity: ${props => props.opacity};
    user-select: ${props => props.userSelect};
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
    justify-self: ${props => props.justify};
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    margin-bottom: ${props => props.marginBottom}rem;
    margin-top: ${props => props.marginTop}rem;
    max-width: ${props => props.maxWidth}rem;
    opacity: ${props => props.opacity};
    user-select: ${props => props.userSelect};
    
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
    @media ${mediaQuery.styledMobile} {
       font-size : 7rem ;
    }
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
    @media ${mediaQuery.styledMobile} {
       font-size : 5rem ;
    }
`

export const Title03 = styled.h1`
    ${ArialTheme}
    font-size: 8.6rem;
    @media ${mediaQuery.styledMobile} {
       font-size : 6.2rem ;
    }
`

export const Headline01 = styled.h2`
    ${ArialTheme}
    font-size: 4rem;
`

export const Headline02 = styled.h3`
    ${ArialTheme}
    font-size: 3rem;
    line-height: 160%;
    text-transform: capitalize;
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
    font-weight: 700;
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
    @media ${mediaQuery.styledTablet} {
        font-size: 1.75rem;
    }
`

export const Body05 = styled(Body04)`
    font-size: 1.3rem;
`

export const Body06 = styled.p`
    ${ArialTheme}
    font-size: 1.3rem;
`

export const Body07 = styled.p`
    ${ArialTheme}
    font-size: 1.1rem;
    text-transform: capitalize;
`

export const ArialSize = styled.p`
    ${ArialTheme}
    text-transform: ${props => props.transform};
    font-size: ${props => props.size}rem;
    font-weight: ${props => props.weight || 400};
`


export const NotoSans = styled.p`
    font-family: 'Noto Sans';
    font-style: italic;
    font-weight: 200;
    font-size: 36px;
    line-height: 100%;
    color: ${props => props.color || 'white'};
    align-self : ${props => props.flex };
    margin-right: ${props => props.marginRight}rem;
    margin-left: ${props => props.marginLeft}rem;
    max-width: ${props => props.maxWidth}rem;
    opacity: ${props => props.opacity};
    text-align: right;
    letter-spacing: -0.01em;
    text-transform: uppercase;
`






