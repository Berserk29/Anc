import NavFooter from "../../component/navFooter/navFooter.component"
import Typo, { TypoType } from "../../component/typo/typo.component";
import { SectionContainer } from "./signInPage.styled";


const SignInPage = () => {
    return (
        <NavFooter>
            <SectionContainer>
                <SignInPage>
                    <Typo type={TypoType.title_1}>slkdfj</Typo>
                </SignInPage>
            </SectionContainer>
        </NavFooter>
    )
}

export default SignInPage;