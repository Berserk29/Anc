import { Fragment, useContext, useEffect, useRef, useState} from "react";
import { phone } from 'phone';

import Typo, { TypoType } from "../../component/typo/typo.component";
import Table, { TableType } from "../../component/table/table.component";
import NavFooter from "../../component/navFooter/navFooter.component"
import Summary from "../../component/summary/summary.component";

import { 
    Section,
    ProductContainer,
    OrderContainer,
    GridContainer,
    Input,
    SelectCss,
    BoxSelect,
    Expiration,
    CvvContainer,
    CvvInput,
    ImgIcon,
    SpaceContainer,
    ErrorContainer
} from "./orderPage.styled";
import { ErrorBoxWhite } from "../signInPage/signInPage.styled";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { provinceArr, adressInputArr, monthArr , yearArr, cvvIcon} from "./orderPage.data";
import PaymentComplete from "../../component/paymentComplete/paymentComplete.component";


const OrderPage = () => {
    const formRef = useRef(null);
    const {formAddress, setFormAddress, formCard, setFormCard, currentUser, createPaymentDocument, paymentPageComplete, setPaymentPageComplete} = useContext(UserContext)
    const {taxLogic, cartItems, removeAllItems} = useContext(CartContext)
    const [errMessage, setErrMessage] = useState(false)

    useEffect(() => {
        setPaymentPageComplete(false)
    }, [])

    // FORMADDRESS LOGIC
    const submitHandler = (event) => {
        event.preventDefault();
        const {phoneNumber} = formAddress
        const resultPhone = phone(phoneNumber, {country: 'Canada'})

        if(phoneNumber.trim().match(/[^0-9/()+//-]/) || phoneNumber.length < 8 || !resultPhone.isValid) throw new Error('Invalid phone number')

    }

    // FORMCARD LOGIC
    const submitCardHandler = (event) => {
        event.preventDefault();
        const {month, year, security} = formCard;
        const inputDay = new Date(`${year}-${ month }-01`).getTime();
        const today = new Date().getTime() - (1000 * 60 * 60 * 24 * 30);

        if(today > inputDay) throw new Error('Your card is expirated')
        if(security.match(/[A-z]/) || security.length < 3 || security.length > 4) throw new Error('CVV Validation Error')
        
    }

    const handleFormSubmit = async () => {
        try{
            const isSomeAdressEmpty = Object.values(formAddress).some((el) => el.trim() === '');
            const isSomeCardEmpty = Object.values(formCard).some((el) => el.trim() === '');

            if(isSomeAdressEmpty || isSomeCardEmpty) throw new Error('Some input field are empty')
            
            const event = { preventDefault: () => {} }; // Create a dummy event object
            submitHandler(event);
            submitCardHandler(event);

        } catch(err) {
            setErrMessage(err.message)
            return;
        }

        setErrMessage(false)
        await createPaymentDocument(formAddress, formCard, cartItems, currentUser.email)
        removeAllItems()
    };
    
    const handleChange = (setForm, form, event) => {
        const {id, value} = event.target;
        setForm({...form, [id]: value});
        if(id === 'province') taxLogic(value)
    }

    const formInput = () => {
        return (
        <>
            {/* FORMADDRESS */}
            <form 
            onSubmit={submitHandler}  
            ref={formRef}
            >
                <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Adress Information</Typo>
                <GridContainer>
                    <Table type={TableType.heading}>Country</Table>
                    <Table type={TableType.fixed}>Canada</Table>
                    { adressInputArr.map((el,i) => {
                        const {id, heading, type, autoComplete} = el;
                        return (
                            el.id !== 'province' ? 
                                    <Fragment key={i}>
                                        <Table type={TableType.label_heading} id={id}>{heading}</Table>
                                        <Input 
                                            type={type}
                                            id={id}
                                            required onChange={(event) => handleChange(setFormAddress, formAddress, event)}
                                            value={formAddress[id]}
                                            autoComplete={autoComplete}
                                            />
                                    </Fragment>
                                :
                                <Fragment key={i}>
                                    <Table type={TableType.heading} id={id}>{heading}</Table>
                                    <BoxSelect>
                                        <SelectCss id={id} onChange={(event) => handleChange(setFormAddress, formAddress, event)} required defaultValue={formAddress.province}>
                                            <option value='' >Select</option>
                                            {provinceArr.map((el,i) => <option key={i} value={el.name}>{el.name}</option>)}
                                        </SelectCss>
                                    </BoxSelect>
                                </Fragment>
                        )          
                    })}
                </GridContainer>                        
            </form>
            <SpaceContainer />
            {/* FORMCARD */}
            <form onSubmit={submitCardHandler}  ref={formRef}>
                <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Credit or Debit card</Typo>
                <GridContainer>
                    <Table type={TableType.heading}>Card Number</Table>
                    <Table type={TableType.fixed}>0000-0000-0000-0000</Table>
                    {/* NameOnCard */}
                    <Table type={TableType.label_heading} id='nameOnCard'>Name On The Card *</Table>
                    <Input
                        type="text"
                        id='nameOnCard'
                        required onChange={(event) => handleChange(setFormCard, formCard, event)}
                        value={formCard.fullName}
                    />
                    {/* Expiration */}
                    <Table type={TableType.label_heading} id='month'>Expiration date *</Table>
                    <BoxSelect>
                    <Expiration onChange={(event) => handleChange(setFormCard, formCard, event)} id="month" required defaultValue={formCard.month}>
                        <option value='' >MM</option>
                        {monthArr.map((el,i) => <option key={i} value={el}>{el}</option>)}
                    </Expiration>
                    <Expiration onChange={(event) => handleChange(setFormCard, formCard, event)} id="year" required defaultValue={formCard.year}>
                        <option value=''>YYYY</option>
                        {yearArr.map((el,i) => <option key={i} value={el}>{el}</option>)}
                    </Expiration>
                    </BoxSelect>
                    {/* CVV */}
                    <Table type={TableType.label_heading} id='security' >Security Code (CVV) *</Table>
                    <CvvContainer>
                        <CvvInput
                            type="tel"
                            id="security"
                            required onChange={(event) => handleChange(setFormCard, formCard, event)}
                            value={formCard.security}
                        />
                        <ImgIcon src={cvvIcon} alt="cvv icon" />
                    </CvvContainer>
                </GridContainer>                        
            </form>
        </>
        )
    }

    return (
        <NavFooter color="white" sticky={false}>
            <Section>
                {paymentPageComplete ? 
                <PaymentComplete /> :
                <>
                    <ProductContainer>
                        {formInput()}
                    </ProductContainer>
                    <OrderContainer>
                        <Summary btnText={cartItems.length === 0 ? 'Return to the Shopping Page' : 'Payment'} taxSummary={true} onSubmit={handleFormSubmit}/>
                        <ErrorContainer>
                            {errMessage ? <ErrorBoxWhite>{errMessage}</ErrorBoxWhite> : ''}
                        </ErrorContainer>
                    </OrderContainer>
                </>    
                }
            </Section>
        </NavFooter>
    )
}

export default OrderPage;