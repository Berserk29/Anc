import styled, {css} from "styled-components";
import { detect } from "detect-browser";
import mediaQuery from "../../helper/mediaQuery";
const browser = detect();

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* INFO (SCROLL BY SECTION) */
     /* Disable Scroll-snap for 'safari */
    ${() => {
        if(browser && browser.name !== 'safari') {
            return `
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            scroll-snap-stop: always;
            scroll-behavior: smooth;
            `
        }
    }}
`

export const SnapCss = css`
    scroll-snap-align: center;
    scroll-snap-stop: always;
    /* Disable Scroll-snap for 'safari */
    ${() => {
        if(browser && browser.name === 'safari') {
            return `
            scroll-snap-align: none;
            scroll-snap-stop: none;
            `
        }
    }}
`

export const Header = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    align-items: center;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    /* INFO (SCROLL BY SECTION) */
    ${SnapCss}
`

export const HomeFooter = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: black;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* INFO (SCROLL BY SECTION) */
    ${SnapCss}
`

export const ScrollContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    bottom: 40px;
    @media ${mediaQuery.styledTablet} {
        bottom: 60px
    }
    @media ${mediaQuery.styledMobile} {
        bottom: 80px
    }
`

export const ArrowDown = styled.img`
    width: 1.2rem;
`
