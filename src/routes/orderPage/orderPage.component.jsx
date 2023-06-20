import { Fragment, useContext, useRef, useState } from "react";
import NavFooter from "../../component/navFooter/navFooter.component"
import Summary from "../../component/summary/summary.component";
import Table, { TableType } from "../../component/table/table.component";
import { Section, ProductContainer, OrderContainer, GridContainer, Input, SelectCss, BoxSelect, Expiration, CvvContainer, CvvInput, ImgIcon} from "./orderPage.styled";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { provinceArr, adressInputArr, monthArr , yearArr, cvvIcon} from "./orderPage.data";
import Typo, { TypoType } from "../../component/typo/typo.component";
import { event } from "jquery";


const OrderPage = () => {
    const formRef = useRef(null);
    const {formAdress, setFormAdress} = useContext(UserContext)
    const {formCard, setFormCard} = useContext(UserContext)
    const {taxLogic, cartItems} = useContext(CartContext)


    // TODO ALL THE ADRESS LOGIC
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formAdress)
    }

    // TODO ALL THE CARD LOGIC
    const submitCardHandler = (event) => {
        event.preventDefault();
        const {month, year} = formCard;
        const inputDay = new Date(`${year}-${ month }-01`).getTime();
        const today = new Date().getTime() - (1000 * 60 * 60 * 24 * 30);
        
        if(today > inputDay) return console.log('Wrong expiration!')

        
        console.log(formCard)
    }

    const handleChangeAdress = (event) => {
        const {id, value} = event.target;
        setFormAdress({...formAdress, [id]: value});
    }

    const handleChangeCard = (event) => {
        const {id, value} = event.target;
        setFormCard({...formCard, [id]: value});
    }



    const handleChangeProvince = (event) => {
        const {id, value} = event.target;
        setFormAdress({...formAdress, [id]: value});
        taxLogic(value)
    }

    const handleFormSubmit = () => {
        const isSomeFieldEmpty = Object.values(formAdress).some((el) => el === '');
        
        if(isSomeFieldEmpty) {
            const emptyValueOrder = Object.values(formAdress).map((el,i) => el === '' ? i : '').filter(el => el !== '')
            console.log(emptyValueOrder)
        }
        if(!isSomeFieldEmpty) {
            console.log('Good!')
        }
      };


    return (
        <NavFooter color="white">
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
                                                required onChange={handleChangeAdress}
                                                value={formAdress[id]}
                                            />
                                        </Fragment>
                                    :
                                    <Fragment key={i}>
                                        <Table type={TableType.heading} id={id}>{heading}</Table>
                                        <BoxSelect>
                                            <SelectCss id={id} onChange={handleChangeProvince} required defaultValue={formAdress.province}>
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

                    {/* Credit Info !!!!!!!!!!!*/}
                    <form onSubmit={submitCardHandler}  ref={formRef}>
                        <Typo type={TypoType.headline_4} color='black' marginBottom='1.6' marginTop='1.6'>Credit or Debit card</Typo>
                    <GridContainer>

                        {/* Fixed Card Number */}
                        <Table type={TableType.heading}>Card Number</Table>
                        <Table type={TableType.fixed}>0000-0000-0000-0000</Table>

                        {/* FullName */}
                        <Table type={TableType.heading} id='fullName'>Full Name *</Table>
                        <Input
                            type="text"
                            id='fullName'
                            required onChange={handleChangeCard}
                            value={formCard.fullName}
                        />

                        {/* Expiration */}
                        <Table type={TableType.heading} id='month'>Expiration date *</Table>
                        <BoxSelect>
                        <Expiration onChange={handleChangeCard} id="month" required defaultValue={formCard.month}>
                            <option value='' >MM</option>
                            {monthArr.map((el,i) => <option key={i} value={el}>{el}</option>)}
                        </Expiration>
                        <Expiration onChange={handleChangeCard} id="year" required defaultValue={formCard.year}>
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
                                required onChange={handleChangeCard}
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