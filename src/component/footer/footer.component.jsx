import AncLogo from "../ancLogo/ancLogo.component";
import { FooterContainer, FooterLink, FooterLinkContainer, AddressContainer, TextFooter } from "./footer.styled";
import { useNavigate } from 'react-router-dom';


import { footerArray } from "./footer.data";

const Footer = () => {
    const navigate = useNavigate();
    
    const linkHandler = (link) => {
        if(location.pathname === link) return window.location.reload(true) 
        else navigate(link)
    };

    return (
        <FooterContainer>
            <AncLogo />
            <FooterLinkContainer>
                {footerArray.map((el,i) => <FooterLink key={i} onClick={() => linkHandler(el.link)}>{el.heading}</FooterLink>)}
            </FooterLinkContainer>
            <AddressContainer>
                <TextFooter>CHEMIN NOTRE-DAME, CRU #716, Mirabel, Quebec J7J 0T1</TextFooter>
                <TextFooter>+1 855-272-7007</TextFooter>
            </AddressContainer>
            <TextFooter>anc 2023. all rights reserved</TextFooter>
        </FooterContainer>
    )
}

export default Footer;