import styled, {keyframes} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

const slideInAnimation = keyframes`
  from { transform: translateY(-100%);}
  to { transform: translateY(0);}
`;

const slideOutAnimation = keyframes`
    0%, 50% { 
        transform: translateY(0);
    }
    100% { 
        transform: translateY(-100%) ;
    }
`;

const typoOpenAnimation = keyframes`
     from { transform: translateX(-200%); }
     to { transform: translateX(0) ;  }
`;

const typoCloseAnimation = keyframes`
    0% { 
        transform: translateY(0) rotate(0);
        opacity: 1;
    }
    30%, 100% { 
        transform: translateY(100%) rotate(10deg);
        opacity: 0;
    }
`;

export const DropMenuContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: black;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 150;
    animation: ${({ isOpen }) =>
    isOpen ? slideInAnimation : slideOutAnimation} 1s ease-in-out forwards;
    @media ${mediaQuery.styledMobile} {
        gap: 1rem;
    }
`;

export const DropSection = styled.div`
    width: 56rem;
    display: flex;
    gap: 8rem;
    align-items: center;
    overflow: hidden;
    transform-origin: bottom;
    @media ${mediaQuery.styledMobile} {
        width: 29.5rem;
        gap: 2rem;
    }
`;

export const AnimationContainer = styled.div`
animation: ${({ isOpen }) =>
    isOpen ? typoOpenAnimation : typoCloseAnimation} 1s ease-in-out forwards;
`;