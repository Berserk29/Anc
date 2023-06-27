import Typo, { TypoType } from "../typo/typo.component";
import { signInWithGooglePopup, signInWithFacebookPopup } from "../../utiles/firebase/firebase.utiles";

import { Container, IconCss } from "./providerSignIn.styled";

const ProviderSignIn = ({props, switchFunction}) => {
    const {text, icon, provider} = props;

    const signInWithGoogle = async () => {
        try{
            await signInWithGooglePopup();
        }catch(err) {
            switchFunction(err)
        }
    }
    
    const signInWithFacebook = async () => {
        try{
            await signInWithFacebookPopup()
        } catch(err) {
            switchFunction(err)
        }
    };

    const clickHandle = () => {
        if(provider === 'google') return signInWithGoogle();
        if(provider === 'facebook') return signInWithFacebook();
    }

    return (
        <Container onClick={clickHandle}>
            <IconCss src={icon} alt="icon Logo" />
            <Typo type={TypoType.body_5}>{text}</Typo>
        </Container>
    )
}

export default ProviderSignIn;