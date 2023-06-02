import NavFooter from "../../component/navFooter/navFooter.component";
import Typo, { TypoType } from "../../component/typo/typo.component";
import { SectionContainer, ContactContainer, InfoContainer } from "./contactPage.styled";
import { contactArr } from "./contactPage.data";

const ContactPage = () => {
    return (
        <NavFooter>
            <SectionContainer>
                <ContactContainer>
                    <Typo type={TypoType.double}>Contact</Typo>
                    <InfoContainer>
                        { contactArr.map((el,i) => {
                            return (
                            <InfoContainer gap='.8' key={i}>
                                <Typo type={TypoType.body_1}>{el.title}</Typo>
                                <Typo type={TypoType.body_3} opacity='.4'>{el.text}</Typo>
                            </InfoContainer>  
                            )
                        })}
                    </InfoContainer>
                </ContactContainer>
            </SectionContainer>
        </NavFooter>
    )
}

export default ContactPage;