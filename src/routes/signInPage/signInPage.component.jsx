import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import mediaQuery from '../../helper/mediaQuery';

import Typo, {TypoType} from '../../component/typo/typo.component';
import NavFooter from "../../component/navFooter/navFooter.component"

import { 
    signInAuthUserWithEmailAndPassword,
    // signInWithGooglePopup,
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
    ErrorBox
} from "./signInPage.styled";
import BoxBtn, { BoxBtnType } from '../../component/boxBtn/boxBtn.component';

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = formSign
        try{
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();    
        } catch(err){
            switch(err.code) {
                case 'auth/wrong-password' :
                    setErrMessage('Incorrect password or email');
                    break;
                case 'auth/user-not-found' :
                    setErrMessage('Incorrect password or email');
                    break;
                default :
                    setErrMessage('Sign in connection encountered an error');
            }
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
            
            console.log(displayName)

            await createUserDocumentFromAuth({...user, displayName});


            resetFormFields();
            
        } catch(err){
            switch(err.code){
                case 'auth/weak-password' :
                    setErrMessage('Password should be at least 6 characters')
                    break;
                case 'auth/email-already-in-use' :
                    setErrMessage('Cannot create user, email already in use')
                    break;
                default:
                    setErrMessage('User creation encountered an error');
            }
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
                </SignContainer>
            </SectionContainer>
        </NavFooter>
    )
}

export default SignInPage;