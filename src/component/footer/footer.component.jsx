import AncLogo from "../ancLogo/ancLogo.component";
import Typo , {TypoType} from "../typo/typo.component";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { FooterContainer, FooterLink, FooterLinkContainer, AddressContainer} from "./footer.styled";
import { useNavigate } from 'react-router-dom';

 import { footerArray } from "./footer.data";

const Footer = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery(mediaQuery.useMobile)
    
    const linkHandler = (link) => {
        if(location.pathname === link) window.scrollTo(0,0)
        else navigate(link)
    };

    return (
        <FooterContainer>
            <AncLogo />
            { !isMobile ? 
                <FooterLinkContainer>
                    { footerArray.map((el,i) => <FooterLink key={i} onClick={() => linkHandler(el.link)}>{el.heading}</FooterLink>)}
                </FooterLinkContainer>
                : ''
            }
            <AddressContainer>
                <Typo type={TypoType.body_5} color='var(--color-grey)'>CHEMIN NOTRE-DAME, CRU #716, Mirabel, Quebec J7J 0T1</Typo >
                <Typo type={TypoType.body_5} color='var(--color-grey)' flex='center'>+1 855-272-7007</Typo>
            </AddressContainer>
            <Typo type={TypoType.body_5} color='var(--color-grey)'>anc 2023. all rights reserved</Typo>
        </FooterContainer>
    )
}

export default Footer;