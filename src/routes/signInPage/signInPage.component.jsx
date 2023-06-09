import { useState } from 'react';

import Typo, {TypoType} from '../../component/typo/typo.component';
import NavFooter from "../../component/navFooter/navFooter.component"

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utiles/firebase/firebase.utiles';

import { 
    SectionContainer,
    SignContainer,
    FlexContainer,
    SignBtnActive,
    SignBtnNotActive,
    FormInput,
    FormContainer
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
    const [formSign, setFormSign] = useState(defaultFormSign);
    const [formCreate, setFormCreate] = useState(defaultFormCreate);
    

    
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
                    alert('Incorrect password or email');
                    break;
                case 'auth/user-not-found' :
                    alert('No user associated with this email');
                    break;
                default :
                    console.error(err);
            }
        }
    }

    const handleCreate = async (event) => {
        event.preventDefault();
        const {password, confirmPassword, email, displayName} = formCreate

        if(password !== confirmPassword){
            alert('password do not match');
            return ;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields();
            
        }catch(err){
            if(err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            else{
                console.log('user creation encountered an error', err)
            }
        }
    }

    const handleChange = (event) => {
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
                        { btnNum }
                        <BoxBtn type={BoxBtnType.radio_active} w='63' h='5.6' typoType='body_1'>Continue</BoxBtn>
                    </form>
                </SignContainer>
            </SectionContainer>
        </NavFooter>
    )
}

export default SignInPage;