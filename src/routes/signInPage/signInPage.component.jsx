import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import mediaQuery from '../../helper/mediaQuery';

import BoxBtn, { BoxBtnType } from '../../component/boxBtn/boxBtn.component';
import Typo, {TypoType} from '../../component/typo/typo.component';
import NavFooter from "../../component/navFooter/navFooter.component"
import ProviderSignIn from '../../component/providerSignIn/providerSignIn.component';
import { signInArr } from './signInPage.data';

import { 
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utiles/firebase/firebase.utiles';

import { 
    SectionContainer,
    SignContainer,
    FlexContainer,
    SignBtnActive,
    SignBtnNotActive,
    FormInput,
    FormContainer,
    ErrorBox,
} from "./signInPage.styled";

const defaultFormSign = {
    email: '',
    password: '',
}

const defaultFormCreate = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignInPage = () => {
    const [ btnNum, setBtnNum ] = useState(0);
    const [errMessage , setErrMessage] = useState(false)
    const [formSign, setFormSign] = useState(defaultFormSign);
    const [formCreate, setFormCreate] = useState(defaultFormCreate);

    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)

    
    const resetFormFields = () => {
        setFormSign(defaultFormSign);
        setFormCreate(defaultFormCreate)
    }
    
    const switchFunction = (err) => {
        switch(err.code){
            case 'auth/weak-password' :
                setErrMessage('Password should be at least 6 characters')
                break;
            case 'auth/email-already-in-use' :
                setErrMessage('Cannot create user, email already in use')
                break;
            case 'auth/account-exists-with-different-credential' :
                setErrMessage('This account exists with a different sign in option')
                break;
            case 'auth/wrong-password' :
                setErrMessage('Incorrect password or email');
                break;
            case 'auth/user-not-found' :
                setErrMessage('Incorrect password or email');
                break;
            case 'auth/popup-closed-by-user' :
                setErrMessage('Sign in popup closed by the user');
                break;
            default:
                setErrMessage('User creation encountered an error');
        }        
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = formSign
        try{
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();    
        } catch(err){
            switchFunction(err)
        }
    }

    const handleCreate = async (event) => {
        event.preventDefault();
        const {password, confirmPassword, email, displayName} = formCreate;

        if(password !== confirmPassword){
            setErrMessage('Password do not match');
            return ;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth({...user, displayName});
            resetFormFields();
        } catch(err) {
            switchFunction(err)
        }
    }

    const handleChange = (event) => {
        if(errMessage) setErrMessage(false);
        const {name, value} = event.target;
        if(btnNum === 0) {
            setFormSign({...formSign, [name]: value});
        }
        if(btnNum === 1) {
            setFormCreate({...formCreate, [name]: value})
        }
    }

    const BtnChoice = () => {
        const signHandler = (i) => {
            resetFormFields()
            setErrMessage(false)
            setBtnNum(i)
        }; 

        if(btnNum === 0)
        return (
            <>
            <SignBtnActive><Typo type={TypoType.body_1}>Sign In</Typo></SignBtnActive>
            <SignBtnNotActive onClick={() => signHandler(1)}><Typo type={TypoType.body_1} opacity='.4'>Create Account</Typo></SignBtnNotActive>
            </>
        )
        if(btnNum === 1)
        return (
            <>
            <SignBtnNotActive onClick={() => signHandler(0)}><Typo type={TypoType.body_1} opacity='.4'>Sign In</Typo></SignBtnNotActive>
            <SignBtnActive><Typo type={TypoType.body_1}>Create Account</Typo></SignBtnActive>
        </>
        )
    }

    const formChoice = () => {
        if(btnNum === 0)
        return (
         <>
            <FormInput 
            placeholder='Email' 
            type='email'
            required onChange={handleChange}
            name='email'
            value={formSign.email}
            />
            <FormInput 
                placeholder='Password'
                type='password' 
                required onChange={handleChange}
                name='password'
                value={formSign.password}
            />
         </>   
        )
        if(btnNum === 1)
        return (
         <>
            <FormInput 
                placeholder='Your Name' 
                type='type'
                required onChange={handleChange}
                name='displayName'
                value={formCreate.displayName}
            />
            <FormInput 
                placeholder='Email'
                type='email' 
                required onChange={handleChange}
                name='email'
                value={formCreate.email}
            />
            <FormInput
                placeholder='Password'
                type="password" 
                required onChange={handleChange}
                name="password"
                value={formCreate.password}
            />
            <FormInput
                placeholder='Confirm Password'
                type="password" 
                required onChange={handleChange}
                name="confirmPassword"
                value={formCreate.confirmPassword}
            />
         </>   
        )
        
    }

    return (
        <NavFooter>
            <SectionContainer>
                <SignContainer>
                    <FlexContainer>
                        <BtnChoice />
                    </FlexContainer>
                    <form onSubmit={btnNum === 0 ? handleSubmit : handleCreate}>
                        <FormContainer>
                            {formChoice()}
                        </FormContainer>
                        { errMessage ? <ErrorBox>{errMessage}</ErrorBox> : ''} 
                        { btnNum }
                        <BoxBtn type={BoxBtnType.radio_active} w={isSmTablet ? '100%' : '63rem'} h='5.6rem' typoType='body_1'>Continue</BoxBtn>
                    </form>
                    { btnNum === 0 &&
                        <FlexContainer direction={ isSmTablet ? 'column' : 'row'}>
                            { signInArr.map((el,i) => <ProviderSignIn key={i} props={el} switchFunction={switchFunction}/>) }
                        </FlexContainer>
                    }
                </SignContainer>
            </SectionContainer>
        </NavFooter>
    )
}

export default SignInPage;