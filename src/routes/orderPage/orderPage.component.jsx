import { Fragment, useContext, useRef, useState} from "react";
import NavFooter from "../../component/navFooter/navFooter.component"
import Summary from "../../component/summary/summary.component";
import Table, { TableType } from "../../component/table/table.component";
import { Section, ProductContainer, OrderContainer, GridContainer, Input, SelectCss, BoxSelect, Expiration, CvvContainer, CvvInput, ImgIcon, SpaceContainer} from "./orderPage.styled";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { provinceArr, adressInputArr, monthArr , yearArr, cvvIcon} from "./orderPage.data";
import Typo, { TypoType } from "../../component/typo/typo.component";
import { ErrorBoxWhite } from "../signInPage/signInPage.styled";


const OrderPage = () => {
    const formRef = useRef(null);
    const {formAdress, setFormAdress} = useContext(UserContext)
    const {formCard, setFormCard} = useContext(UserContext)
    const {taxLogic, cartItems} = useContext(CartContext)
    const [errMessage, setErrMessage] = useState(false)


    // TODO ALL THE ADRESS LOGIC
    const submitHandler = (event) => {
        event.preventDefault();
        const {phoneNumber} = formAdress

        if(phoneNumber.match(/[^0-9/()//-]/)) {
            console.log('sfd')
            setErrMessage('Wrong phone number')
            return;
        }
        setErrMessage(false)
    }

    // TODO ALL THE CARD LOGIC
    const submitCardHandler = (event) => {
        event.preventDefault();
        const {month, year, security} = formCard;
        const inputDay = new Date(`${year}-${ month }-01`).getTime();
        const today = new Date().getTime() - (1000 * 60 * 60 * 24 * 30);

        if(today > inputDay) {
            setErrMessage('Your card is expirated')
            return;
        }

        if(security.match(/[A-z]/) || security.length < 3 || security.length > 4) {
            setErrMessage('Wrong security card')
            return;
        }
        setErrMessage(false)
    }

    // TODO HANDLE SUBMIT AND HANDLE PROBLEM
    const handleFormSubmit = () => {
        const isSomeAdressEmpty = Object.values(formAdress).some((el) => el === '');
        const isSomeCardEmpty = Object.values(formCard).some((el) => el === '');
        if(isSomeAdressEmpty || isSomeCardEmpty) {
            setErrMessage('Some input field are empty')
            return;
        }
        const event = { preventDefault: () => {} }; // Create a dummy event object
        submitHandler(event);
        submitCardHandler(event);
        if(errMessage) return console.log('Wrong')
        // TESTING
        console.log('Good')
    };
    
    const handleChange = (setForm, form, event) => {
        const {id, value} = event.target;
        setForm({...form, [id]: value});
        if(id === 'province') taxLogic(value)
    }

    return (
        <NavFooter color="white" sticky={false}>
            <Section>
                <ProductContainer>
                    {/* Adress Info !!!!!!!!!!!*/}
                    <form onSubmit={submitHandler}  ref={formRef}>
                        <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Adress Information</Typo>
                    <GridContainer>
                        <Table type={TableType.heading}>Country</Table>
                        <Table type={TableType.fixed}>Canada</Table>
                        { adressInputArr.map((el,i) => {
                            const {id, heading, type} = el;
                            return (
                                el.id !== 'province' ? 
                                        <Fragment key={i}>
                                            <Table type={TableType.heading} id={id}>{heading}</Table>
                                            <Input 
                                                type={type}
                                                id={id}
                                                required onChange={(event) => handleChange(setFormAdress, formAdress, event)}
                                                value={formAdress[id]}
                                            />
                                        </Fragment>
                                    :
                                    <Fragment key={i}>
                                        <Table type={TableType.heading} id={id}>{heading}</Table>
                                        <BoxSelect>
                                            <SelectCss id={id} onChange={(event) => handleChange(setFormAdress, formAdress, event)} required defaultValue={formAdress.province}>
                                                <option value='' >Select</option>
                                                {provinceArr.map((el,i) => <option key={i} value={el.name}>{el.name}</option>)}
                                            </SelectCss>
                                        </BoxSelect>
                                    </Fragment>
                            )          
                        })}
                    </GridContainer>                        
                        <button>Using this adress</button>
                    </form>
                        <SpaceContainer>
                            { errMessage ? <ErrorBoxWhite>{errMessage}</ErrorBoxWhite> : ''}
                        </SpaceContainer>
                    {/* Credit Info !!!!!!!!!!!*/}
                    <form onSubmit={submitCardHandler}  ref={formRef}>
                        <Typo type={TypoType.headline_4} color='black' marginBottom='1.6'>Credit or Debit card</Typo>
                    <GridContainer>

                        {/* Fixed Card Number */}
                        <Table type={TableType.heading}>Card Number</Table>
                        <Table type={TableType.fixed}>0000-0000-0000-0000</Table>

                        {/* FullName */}
                        <Table type={TableType.heading} id='nameOnCard'>Name On The Card *</Table>
                        <Input
                            type="text"
                            id='nameOnCard'
                            required onChange={(event) => handleChange(setFormCard, formCard, event)}
                            value={formCard.fullName}
                        />

                        {/* Expiration */}
                        <Table type={TableType.heading} id='month'>Expiration date *</Table>
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
                        <Table type={TableType.heading} id='security' >Security Code (CVV) *</Table>
                        <CvvContainer>
                            <CvvInput
                                type="tel"
                                pattern="\d*"
                                maxLength="4"
                                id="security"
                                required onChange={(event) => handleChange(setFormCard, formCard, event)}
                                value={formCard.security}
                            />
                            <ImgIcon src={cvvIcon} alt="cvv icon" />
                        </CvvContainer>

                    </GridContainer>                        
                        <button>Using this adress</button>
                    </form>

                </ProductContainer>
                <OrderContainer>
                    <Summary btnText={cartItems.length === 0 ? 'Return to the Shopping Page' : 'Payment'} taxSummary={true} onSubmit={handleFormSubmit}/>
                </OrderContainer>
            </Section>
        </NavFooter>
    )
}

export default OrderPage;