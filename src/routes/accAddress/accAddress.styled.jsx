import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    display: flex;
    width: 95.5rem;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    @media ${mediaQuery.styledSmLaptop} {
        width: 63rem;
    }
    @media ${mediaQuery.styledTablet} {
        width: 100%;
    }
`

export const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    text-align: start;
`
